import occtimportjs, {
  type OcctImporter,
  type TriangulationParams,
} from 'occt-import-js'
import occtWasmUrl from 'occt-import-js/dist/occt-import-js.wasm?url'

let occtPromise: Promise<OcctImporter> | null = null

export const triangulationSettings: TriangulationParams = {
  linearUnit: 'millimeter',
  linearDeflectionType: 'bounding_box_ratio',
  linearDeflection: 0.003,
  angularDeflection: 0.4,
}

export function getOcctImporter(): Promise<OcctImporter> {
  if (!occtPromise) {
    occtPromise = occtimportjs({
      locateFile: () => occtWasmUrl,
    })
  }
  return occtPromise
}
