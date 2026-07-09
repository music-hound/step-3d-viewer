import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
  type TouchEvent,
} from 'react'
import { useStepViewer } from './hooks/useStepViewer'
import { ViewerSurface } from './components/ViewerSurface'
import { ControlPanel } from './components/ControlPanel'
import { ContextMenu } from './components/ContextMenu'
import { ThemeToggle } from './components/ThemeToggle'
import { sampleModels } from './data/sampleModels'
import './styles/animations.css'
import './styles/base.css'
import './styles/sample-library.css'
import './styles/viewer.css'
import './styles/control-panel.css'
import './styles/context-menu.css'
import './styles/model-tree.css'

const normalizeHexColor = (value: string) => {
  if (typeof value !== 'string') {
    return value
  }
  const hex = value.trim().toLowerCase()
  if (!hex.startsWith('#')) {
    return hex
  }
  if (/^#[0-9a-f]{8}$/.test(hex)) {
    return `#${hex.slice(1, 7)}`
  }
  if (/^#[0-9a-f]{6}$/.test(hex)) {
    return hex
  }
  if (/^#[0-9a-f]{4}$/.test(hex)) {
    return `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
  }
  if (/^#[0-9a-f]{3}$/.test(hex)) {
    return `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
  }
  return hex
}

const DEFAULT_PALETTE = ['#ff920dff', '#4c6dffff', '#8bc34aff', '#ff0000ff'] as const
const INITIAL_PALETTE = DEFAULT_PALETTE.map((color) => normalizeHexColor(color))
const THEME_STORAGE_KEY = 'step-viewer-theme'
type ThemeMode = 'dark' | 'light'

const getPreferredTheme = (): ThemeMode => {
  if (typeof window === 'undefined') {
    return 'dark'
  }
  const stored = window.localStorage?.getItem(THEME_STORAGE_KEY)
  if (stored === 'dark' || stored === 'light') {
    return stored
  }
  const media = window.matchMedia?.('(prefers-color-scheme: light)')
  return media?.matches ? 'light' : 'dark'
}

function App() {
  const viewer = useStepViewer()
  const {
    selectMeshAtScreenPosition,
    selectedMeshName,
    serializeSceneState,
    applySceneState,
    hasModel,
  } = viewer
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [isMobileLayout, setIsMobileLayout] = useState(false)
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null)
  const touchTimerRef = useRef<number | null>(null)
  const touchPointRef = useRef<{ x: number; y: number } | null>(null)
  const [colorPalette, setColorPalette] = useState<string[]>(INITIAL_PALETTE)
  const [theme, setTheme] = useState<ThemeMode>(() => getPreferredTheme())

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    window.localStorage?.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')

    const applyMatch = (matches: boolean) => {
      setIsMobileLayout(matches)
      if (matches) {
        setIsPanelOpen(false)
      }
    }

    applyMatch(mediaQuery.matches)

    const handleChange = (event: MediaQueryListEvent) => {
      applyMatch(event.matches)
      if (event.matches) {
        setIsPanelOpen(false)
      }
    }

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange)
    } else {
      mediaQuery.addListener(handleChange)
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange)
      } else {
        mediaQuery.removeListener(handleChange)
      }
    }
  }, [])

  const panelClassName = useMemo(
    () =>
      [
        'control-panel',
        isMobileLayout ? 'control-panel--mobile' : '',
        isPanelOpen ? 'control-panel--open' : 'control-panel--collapsed',
      ]
        .filter(Boolean)
        .join(' '),
    [isMobileLayout, isPanelOpen],
  )

  const panelId = 'control-panel'
  const normalizedSelectionColor = useMemo(
    () => normalizeHexColor(viewer.selectionColor),
    [viewer.selectionColor],
  )
  const canAddPaletteColor = useMemo(
    () => !colorPalette.includes(normalizedSelectionColor),
    [colorPalette, normalizedSelectionColor],
  )

  const handleSaveSceneState = useCallback(() => {
    const snapshot = serializeSceneState()
    if (!snapshot) {
      alert('No model available to save.')
      return
    }
    const blob = new Blob([JSON.stringify(snapshot, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = `step-viewer-state-${new Date().toISOString().replace(/[:.]/g, '-')}.json`
    anchor.click()
    URL.revokeObjectURL(url)
  }, [serializeSceneState])

  const handleLoadSceneState = useCallback(
    async (file: File) => {
      try {
        const text = await file.text()
        const snapshot = JSON.parse(text)
        const applied = applySceneState(snapshot)
        if (!applied) {
          alert('Failed to apply saved scene state.')
        }
      } catch (error) {
        console.error(error)
        alert('Failed to read the scene state file.')
      }
    },
    [applySceneState],
  )

  const handleSelectPaletteColor = useCallback(
    (color: string) => {
      viewer.setSelectionColor(normalizeHexColor(color))
    },
    [viewer],
  )

  const handleAddPaletteColor = useCallback(() => {
    setColorPalette((prev) =>
      prev.includes(normalizedSelectionColor) ? prev : [...prev, normalizedSelectionColor],
    )
  }, [normalizedSelectionColor])

  const handleRemovePaletteColor = useCallback((color: string) => {
    setColorPalette((prev) => prev.filter((entry) => entry !== color))
  }, [])

  const handleApplyPaletteColor = useCallback(
    (color: string) => {
      const hex = normalizeHexColor(color)
      viewer.applyColorToSelectionWithValue(hex)
      setContextMenu(null)
    },
    [viewer],
  )

  const clearTouchTimer = useCallback(() => {
    if (touchTimerRef.current !== null) {
      window.clearTimeout(touchTimerRef.current)
      touchTimerRef.current = null
    }
  }, [])

  const openContextMenuAt = useCallback(
    (clientX: number, clientY: number) => {
      const hasMesh = selectMeshAtScreenPosition(clientX, clientY)
      if (!hasMesh && !selectedMeshName) {
        setContextMenu(null)
        return false
      }
      setContextMenu({ x: clientX, y: clientY })
      return true
    },
    [selectMeshAtScreenPosition, selectedMeshName],
  )

  const handleViewerContextMenu = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      event.preventDefault()
      event.stopPropagation()
      openContextMenuAt(event.clientX, event.clientY)
    },
    [openContextMenuAt],
  )

  const handleViewerTouchStart = useCallback(
    (event: TouchEvent<HTMLElement>) => {
      if (event.touches.length !== 1) {
        clearTouchTimer()
        return
      }
      const touch = event.touches[0]
      touchPointRef.current = { x: touch.clientX, y: touch.clientY }
      clearTouchTimer()
      touchTimerRef.current = window.setTimeout(() => {
        const point = touchPointRef.current
        if (!point) {
          return
        }
        openContextMenuAt(point.x, point.y)
        clearTouchTimer()
      }, 550)
    },
    [clearTouchTimer, openContextMenuAt],
  )

  const handleViewerTouchMove = useCallback(
    (event: TouchEvent<HTMLElement>) => {
      if (!touchPointRef.current) {
        return
      }
      const touch = event.touches[0]
      const dx = touch.clientX - touchPointRef.current.x
      const dy = touch.clientY - touchPointRef.current.y
      if (Math.hypot(dx, dy) > 15) {
        clearTouchTimer()
      }
    },
    [clearTouchTimer],
  )

  const handleViewerTouchEnd = useCallback(() => {
    clearTouchTimer()
    touchPointRef.current = null
  }, [clearTouchTimer])

  useEffect(() => {
    if (!contextMenu) {
      return
    }
    const handlePointerDown = (event: PointerEvent) => {
      if (event.button !== 0 && event.pointerType !== 'touch') {
        return
      }
      setContextMenu(null)
    }
    const handleResize = () => setContextMenu(null)
    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [contextMenu])

  useEffect(() => {
    return () => {
      clearTouchTimer()
    }
  }, [clearTouchTimer])

  useEffect(() => {
    if (!selectedMeshName) {
      setContextMenu(null)
    }
  }, [selectedMeshName])

  const handleExtinguishSelection = () => {
    viewer.extinguishSelection()
    setContextMenu(null)
  }

  return (
    <div
      className="app"
      data-panel-open={isPanelOpen}
      data-mobile-layout={isMobileLayout}
      data-theme={theme}
    >
      <ViewerSurface
        canvasRef={viewer.canvasHostRef}
        hasModel={viewer.hasModel}
        isDragActive={viewer.isDragActive}
        isLoading={viewer.isLoading}
        isPanelOpen={isPanelOpen}
        panelId={panelId}
        onContextMenu={handleViewerContextMenu}
        onTouchStart={handleViewerTouchStart}
        onTouchMove={handleViewerTouchMove}
        onTouchEnd={handleViewerTouchEnd}
        onDragEnter={viewer.handleDragEnter}
        onDragLeave={viewer.handleDragLeave}
        onDragOver={viewer.handleDragOver}
        onDrop={viewer.handleDrop}
        onTogglePanel={() => setIsPanelOpen(true)}
      >
        <ControlPanel
          className={panelClassName}
          ariaHidden={!isPanelOpen}
          error={viewer.error}
          isLoading={viewer.isLoading}
          controlsDisabled={viewer.controlsDisabled}
          onFileChange={viewer.handleFileInput}
          onHidePanel={() => setIsPanelOpen(false)}
          selectionColor={viewer.selectionColor}
          onSelectionColorChange={(event) => viewer.setSelectionColor(event.target.value)}
          selectedMeshName={viewer.selectedMeshName}
          onApplyColor={viewer.applyColorToSelection}
          onResetColor={viewer.resetSelectionColor}
          colorPalette={colorPalette}
          onSelectPaletteColor={handleSelectPaletteColor}
          onAddPaletteColor={handleAddPaletteColor}
          onRemovePaletteColor={handleRemovePaletteColor}
          canAddPaletteColor={canAddPaletteColor}
          onSaveSceneState={handleSaveSceneState}
          onLoadSceneState={handleLoadSceneState}
          sceneStateDisabled={!hasModel}
          samples={sampleModels}
          onSampleSelect={(sample) => viewer.loadSample(sample.url, sample.label, sample.fileName)}
          modelTree={viewer.meshTree}
          selectedMeshId={viewer.selectedMeshId}
          onSelectTreeNode={(id) => viewer.selectMeshById(id)}
        />
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
        {contextMenu && (
          <ContextMenu
            x={contextMenu.x}
            y={contextMenu.y}
            onExtinguish={handleExtinguishSelection}
            onChangeColor={(hex) => viewer.applyColorToSelectionWithValue(hex)}
            currentColor={viewer.selectionColor}
            palette={colorPalette}
            onPaletteColorSelect={handleApplyPaletteColor}
            canApplyColor={Boolean(viewer.selectedMeshName)}
          />
        )}
      </ViewerSurface>
    </div>
  )
}

export default App
