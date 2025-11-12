import { sampleModelsManifest } from 'virtual:sample-models'

export interface SampleModel {
  label: string
  fileName: string
  url: string
}

const sanitizeLabel = (fileName: string) =>
  fileName.replace(/\.(step|stp)$/i, '').replace(/[-_]+/g, ' ')

export const sampleModels: SampleModel[] = sampleModelsManifest
  .map(({ fileName, url }) => ({
    label: sanitizeLabel(fileName),
    fileName,
    url,
  }))
  .sort((a, b) => a.label.localeCompare(b.label, 'ru'))
