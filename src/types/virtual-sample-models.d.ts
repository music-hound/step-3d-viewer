declare module 'virtual:sample-models' {
  interface SampleModelsManifestEntry {
    fileName: string
    url: string
  }

  export const sampleModelsManifest: SampleModelsManifestEntry[]
}
