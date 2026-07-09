import type { SampleModel } from '../data/sampleModels'

interface SampleLibraryProps {
  samples: SampleModel[]
  disabled: boolean
  onSelect: (sample: SampleModel) => void
}

export function SampleLibrary({ samples, disabled, onSelect }: SampleLibraryProps) {
  return (
    <section className="sample-library" aria-label="Sample library">
      <div className="sample-library__header">
        <p className="section-label">Sample Library</p>
        <span className="sample-library__count">{samples.length}</span>
      </div>
      <div className="sample-library__list">
        {samples.length === 0 && (
          <span className="sample-library__empty">
            Add .step/.stp files to the <code>public/models</code> folder
          </span>
        )}
        {samples.map((sample) => (
          <button
            key={sample.fileName}
            type="button"
            className="sample-card"
            onClick={() => onSelect(sample)}
            disabled={disabled}
            title={`Open ${sample.fileName}`}
          >
            <span className="sample-card__label">{sample.label}</span>
            <span className="sample-card__meta">{sample.fileName}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
