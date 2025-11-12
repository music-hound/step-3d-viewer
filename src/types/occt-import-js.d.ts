declare module 'occt-import-js' {
  export type LinearUnit = 'millimeter' | 'centimeter' | 'meter' | 'inch' | 'foot'
  export type LinearDeflectionType = 'bounding_box_ratio' | 'absolute_value'

  export interface TriangulationParams {
    linearUnit?: LinearUnit
    linearDeflectionType?: LinearDeflectionType
    linearDeflection?: number
    angularDeflection?: number
  }

  export interface StepMeshAttributes {
    position: {
      array: number[]
    }
    normal?: {
      array: number[]
    }
  }

  export interface StepMeshIndex {
    array: number[]
  }

  export interface BrepFace {
    first: number
    last: number
    color: [number, number, number] | null
  }

  export interface StepMeshDefinition {
    name?: string
    color?: [number, number, number]
    attributes: StepMeshAttributes
    index: StepMeshIndex
    brep_faces?: BrepFace[]
  }

  export interface StepHierarchyNode {
    name: string
    meshes: number[]
    children: StepHierarchyNode[]
  }

  export interface StepImportResult {
    success: boolean
    root?: StepHierarchyNode
    meshes: StepMeshDefinition[]
  }

  export interface OcctImporter {
    ReadStepFile(
      content: Uint8Array,
      params: TriangulationParams | null,
    ): StepImportResult
  }

  export interface InitOptions {
    locateFile?: (file: string, scriptDirectory?: string) => string
    wasmBinary?: ArrayBuffer
  }

  export default function occtimportjs(options?: InitOptions): Promise<OcctImporter>
}

declare module '*.wasm?url' {
  const src: string
  export default src
}
