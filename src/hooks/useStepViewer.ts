import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type DragEvent,
} from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { getOcctImporter, triangulationSettings } from '../lib/occt'
import type { StepImportResult } from 'occt-import-js'

const READY_MESSAGE =
  'Перетащите .step/.stp файл в область просмотра или воспользуйтесь панелью управления.'
const INIT_MESSAGE = 'Загружаем движок OpenCascade...'

export function useStepViewer() {
  const canvasHostRef = useRef<HTMLDivElement | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const controlsRef = useRef<OrbitControls | null>(null)
  const animationHandle = useRef<number | null>(null)
  const dragDepth = useRef(0)
  const modelGroupRef = useRef<THREE.Group | null>(null)
  const gridRef = useRef<THREE.GridHelper | null>(null)
  const defaultGridY = -0.0001
  const raycasterRef = useRef(new THREE.Raycaster())
  const pointerVector = useRef(new THREE.Vector2())
  const selectedMeshRef = useRef<THREE.Mesh | null>(null)

  const [status, setStatus] = useState(INIT_MESSAGE)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isDragActive, setIsDragActive] = useState(false)
  const [hasModel, setHasModel] = useState(false)
  const [occtReady, setOcctReady] = useState(false)
  const [selectionColor, setSelectionColor] = useState('#ffad0d')
  const [selectedMeshName, setSelectedMeshName] = useState<string | null>(null)

  const selectMesh = useCallback((mesh: THREE.Mesh | null) => {
    const previous = selectedMeshRef.current
    if (previous && previous.material instanceof THREE.MeshStandardMaterial) {
      const prevEmissive = previous.userData.baseEmissiveHex
      if (typeof prevEmissive === 'number') {
        previous.material.emissive.setHex(prevEmissive)
      }
    }

    if (mesh && mesh.material instanceof THREE.MeshStandardMaterial) {
      if (mesh.userData.baseEmissiveHex === undefined) {
        mesh.userData.baseEmissiveHex = mesh.material.emissive.getHex()
      }
      mesh.material.emissive.setHex(0x2d3a7a)
      selectedMeshRef.current = mesh
      setSelectedMeshName(mesh.name || 'Без имени')
      if (typeof mesh.userData.paintColorHex === 'string') {
        setSelectionColor(mesh.userData.paintColorHex)
      }
    } else {
      selectedMeshRef.current = null
      setSelectedMeshName(null)
    }
  }, [setSelectionColor])

  useEffect(() => {
    let mounted = true
    getOcctImporter()
      .then(() => {
        if (!mounted) return
        setOcctReady(true)
        setStatus(READY_MESSAGE)
      })
      .catch((initError) => {
        console.error(initError)
        if (!mounted) return
        setError('Не удалось загрузить движок OpenCascade')
        setStatus('Попробуйте обновить страницу')
      })

    return () => {
      mounted = false
    }
  }, [])

  useEffect(() => {
    if (!canvasHostRef.current) {
      return
    }

    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#06070f')
    sceneRef.current = scene

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    rendererRef.current = renderer

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 2000)
    camera.position.set(4, 4, 4)
    cameraRef.current = camera

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.08
    controlsRef.current = controls

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    const keyLight = new THREE.DirectionalLight(0xffffff, 0.85)
    keyLight.position.set(5, 10, 4)
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.45)
    fillLight.position.set(-4, -6, -5)
    scene.add(ambientLight, keyLight, fillLight)

    const grid = new THREE.GridHelper(20, 20, 0x2f3542, 0x1c1f29)
    grid.position.y = defaultGridY
    gridRef.current = grid
    scene.add(grid)

    const mount = canvasHostRef.current
    mount.appendChild(renderer.domElement)

    const handlePointerDown = (event: PointerEvent) => {
      if (!cameraRef.current || !modelGroupRef.current) {
        selectMesh(null)
        return
      }
      const rect = renderer.domElement.getBoundingClientRect()
      pointerVector.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      pointerVector.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
      raycasterRef.current.setFromCamera(pointerVector.current, cameraRef.current)
      const objects = modelGroupRef.current.children
      const intersects = raycasterRef.current.intersectObjects(objects, true)
      if (intersects.length > 0) {
        const intersectObject = intersects[0].object
        if (intersectObject instanceof THREE.Mesh) {
          selectMesh(intersectObject)
        } else {
          selectMesh(null)
        }
      } else {
        selectMesh(null)
      }
    }

    const resizeRenderer = () => {
      if (!mount || !cameraRef.current) {
        return
      }
      const { clientWidth, clientHeight } = mount
      renderer.setSize(clientWidth, clientHeight)
      const cameraInstance = cameraRef.current
      cameraInstance.aspect = clientWidth / Math.max(clientHeight, 1)
      cameraInstance.updateProjectionMatrix()
    }

    resizeRenderer()
    window.addEventListener('resize', resizeRenderer)
    renderer.domElement.addEventListener('pointerdown', handlePointerDown)

    const renderLoop = () => {
      controls.update()
      renderer.render(scene, camera)
      animationHandle.current = requestAnimationFrame(renderLoop)
    }

    renderLoop()

    return () => {
      window.removeEventListener('resize', resizeRenderer)
      renderer.domElement.removeEventListener('pointerdown', handlePointerDown)
      if (animationHandle.current) {
        cancelAnimationFrame(animationHandle.current)
      }
      controls.dispose()
      renderer.dispose()
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [selectMesh])

  const disposeCurrentModel = useCallback(() => {
    if (!sceneRef.current || !modelGroupRef.current) {
      return
    }
    sceneRef.current.remove(modelGroupRef.current)
    modelGroupRef.current.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose()
        if (Array.isArray(child.material)) {
          child.material.forEach((material) => material.dispose())
        } else {
          child.material.dispose()
        }
      }
    })
    modelGroupRef.current = null
    if (gridRef.current) {
      gridRef.current.position.y = defaultGridY
    }
    selectMesh(null)
  }, [selectMesh])

  const fitCameraToGroup = useCallback((group: THREE.Group) => {
    const camera = cameraRef.current
    const controls = controlsRef.current
    if (!camera || !controls) {
      return
    }

    group.updateMatrixWorld(true)
    const box = new THREE.Box3().setFromObject(group)
    const size = box.getSize(new THREE.Vector3())
    const center = box.getCenter(new THREE.Vector3())

    group.position.sub(center)

    const maxSize = Math.max(size.x, size.y, size.z)
    const distance = maxSize === 0 ? 5 : maxSize * 1.6

    const direction = new THREE.Vector3(1.5, 1, 1.2).normalize()
    camera.position.copy(direction.multiplyScalar(distance))
    camera.near = Math.max(distance / 200, 0.01)
    camera.far = distance * 20
    camera.updateProjectionMatrix()

    controls.target.set(0, 0, 0)
    controls.update()
  }, [])

  const applyModelToScene = useCallback(
    (result: StepImportResult) => {
      if (!sceneRef.current) {
        return
      }

      disposeCurrentModel()

      const group = new THREE.Group()
      result.meshes.forEach((meshDef, index) => {
        const geometry = new THREE.BufferGeometry()
        const positionArray = meshDef.attributes.position?.array ?? []
        geometry.setAttribute(
          'position',
          new THREE.Float32BufferAttribute(positionArray, 3),
        )

        const normalArray = meshDef.attributes.normal?.array
        if (normalArray?.length) {
          geometry.setAttribute(
            'normal',
            new THREE.Float32BufferAttribute(normalArray, 3),
          )
        } else {
          geometry.computeVertexNormals()
        }

        if (meshDef.index?.array?.length) {
          geometry.setIndex(meshDef.index.array)
        }

        const meshColor =
          meshDef.color ??
          meshDef.brep_faces?.find((face) => face.color)?.color ??
          [0.82, 0.86, 0.92]

        const baseColor = new THREE.Color(meshColor[0], meshColor[1], meshColor[2])
        const material = new THREE.MeshStandardMaterial({
          color: baseColor,
          metalness: 0.15,
          roughness: 0.35,
          side: THREE.DoubleSide,
        })
        const colorHex = `#${baseColor.getHexString()}`

        const mesh = new THREE.Mesh(geometry, material)
        mesh.name = meshDef.name ?? `Mesh-${index + 1}`
        mesh.userData.originalColorHex = colorHex
        mesh.userData.paintColorHex = colorHex
        group.add(mesh)
      })

      sceneRef.current.add(group)
      modelGroupRef.current = group
      setHasModel(true)
      fitCameraToGroup(group)

      const boundingBox = new THREE.Box3().setFromObject(group)
      const floorY = boundingBox.min.y - 0.002
      if (gridRef.current) {
        gridRef.current.position.y = Number.isFinite(floorY) ? floorY : defaultGridY
        gridRef.current.visible = true
      }
      selectMesh(null)
    },
    [disposeCurrentModel, fitCameraToGroup, selectMesh],
  )

  const applyColorToSelection = useCallback(() => {
    const mesh = selectedMeshRef.current
    if (!mesh || !(mesh.material instanceof THREE.MeshStandardMaterial)) {
      return false
    }
    mesh.material.color.set(selectionColor)
    mesh.material.needsUpdate = true
    mesh.userData.paintColorHex = selectionColor
    return true
  }, [selectionColor])

  const resetSelectionColor = useCallback(() => {
    const mesh = selectedMeshRef.current
    if (!mesh || !(mesh.material instanceof THREE.MeshStandardMaterial)) {
      return false
    }
    const baseColor: string = mesh.userData.originalColorHex || '#d5dde8'
    mesh.material.color.set(baseColor)
    mesh.material.needsUpdate = true
    mesh.userData.paintColorHex = baseColor
    return true
  }, [])

  const loadFromBuffer = useCallback(
    async (buffer: ArrayBuffer, label: string) => {
      setIsLoading(true)
      setError(null)
      setStatus(`Импортируем ${label}...`)

      try {
        const occt = await getOcctImporter()
        const fileBuffer = new Uint8Array(buffer)
        const result = occt.ReadStepFile(fileBuffer, triangulationSettings)

        if (!result?.success || !result.meshes?.length) {
          throw new Error('OCCT вернул пустой результат')
        }

        applyModelToScene(result)
        setStatus(`Готово: ${label} (${result.meshes.length} объектов)`)
      } catch (loadError) {
        console.error(loadError)
        setHasModel(false)
        const message =
          loadError instanceof Error
            ? loadError.message
            : 'Неизвестная ошибка при импорте файла'
        setError(message)
        setStatus('Импорт не удался')
      } finally {
        setIsLoading(false)
      }
    },
    [applyModelToScene],
  )

  const handleFile = useCallback(
    async (file: File) => {
      const buffer = await file.arrayBuffer()
      await loadFromBuffer(buffer, file.name)
    },
    [loadFromBuffer],
  )

  const handleFileInput = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.target.files?.[0]
      if (selectedFile) {
        await handleFile(selectedFile)
      }
      event.target.value = ''
    },
    [handleFile],
  )

  const loadSample = useCallback(
    async (sampleUrl: string, label = 'пример', fileNameLabel?: string) => {
      setStatus(`Загружаем ${label}...`)
      setError(null)
      try {
        const response = await fetch(sampleUrl)
        if (!response.ok) {
          throw new Error('Не удалось получить пример')
        }
        const buffer = await response.arrayBuffer()
        await loadFromBuffer(buffer, fileNameLabel ?? `${label}.step`)
      } catch (sampleError) {
        console.error(sampleError)
        setError(
          sampleError instanceof Error ? sampleError.message : 'Ошибка загрузки примера',
        )
        setStatus('Попробуйте другой файл')
      }
    },
    [loadFromBuffer],
  )

  const handleDrop = useCallback(
    async (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault()
      dragDepth.current = 0
      setIsDragActive(false)
      const file = event.dataTransfer.files?.[0]
      if (file) {
        await handleFile(file)
      }
    },
    [handleFile],
  )

  const handleDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'copy'
  }, [])

  const handleDragEnter = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    dragDepth.current += 1
    setIsDragActive(true)
  }, [])

  const handleDragLeave = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    dragDepth.current = Math.max(dragDepth.current - 1, 0)
    if (dragDepth.current === 0) {
      setIsDragActive(false)
    }
  }, [])

  return {
    canvasHostRef,
    status,
    error,
    isLoading,
    occtReady,
    hasModel,
    isDragActive,
    controlsDisabled: !occtReady || isLoading,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handleFileInput,
    loadSample,
    selectionColor,
    setSelectionColor,
    selectedMeshName,
    applyColorToSelection,
    resetSelectionColor,
  }
}
