import type { SampleModel } from '../data/sampleModels'

interface SampleLibraryProps {
  samples: SampleModel[]
  disabled: boolean
  onSelect: (sample: SampleModel) => void
}

export function SampleLibrary({ samples, disabled, onSelect }: SampleLibraryProps) {
  return (
    <section className="sample-library" aria-label="Библиотека примеров">
      <div className="sample-library__header">
        <p className="section-label">Библиотека примеров</p>
        <span className="sample-library__count">{samples.length}</span>
      </div>
      <div className="sample-library__list">
        {samples.length === 0 && (
          <span className="sample-library__empty">
            Добавьте .step/.stp файлы в папку <code>public/models</code>
          </span>
        )}
        {samples.map((sample) => (
          <button
            key={sample.fileName}
            type="button"
            className="sample-card"
            onClick={() => onSelect(sample)}
            disabled={disabled}
            title={`Открыть ${sample.fileName}`}
          >
            <span className="sample-card__label">{sample.label}</span>
            <span className="sample-card__meta">{sample.fileName}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
