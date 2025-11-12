import type { ChangeEventHandler, ReactNode } from 'react'
import type { SampleModel } from '../data/sampleModels'
import { SampleLibrary } from './SampleLibrary'

interface ControlPanelProps {
  className: string
  ariaHidden: boolean
  error: string | null
  isLoading: boolean
  controlsDisabled: boolean
  onFileChange: ChangeEventHandler<HTMLInputElement>
  onHidePanel: () => void
  selectionColor: string
  onSelectionColorChange: ChangeEventHandler<HTMLInputElement>
  selectedMeshName: string | null
  onApplyColor: () => void
  onResetColor: () => void
  samples: SampleModel[]
  onSampleSelect: (sample: SampleModel) => void
  children?: ReactNode
}

export function ControlPanel({
  className,
  ariaHidden,
  error,
  isLoading,
  controlsDisabled,
  onFileChange,
  onHidePanel,
  selectionColor,
  onSelectionColorChange,
  selectedMeshName,
  onApplyColor,
  onResetColor,
  samples,
  onSampleSelect,
  children,
}: ControlPanelProps) {
  return (
    <aside id="control-panel" className={className} aria-hidden={ariaHidden}>
      <button
        type="button"
        className="panel-close"
        onClick={onHidePanel}
        aria-label="Скрыть меню"
      >
        <span aria-hidden="true">&larr;</span>
      </button>
      <div className="panel__header">
        <p className="eyebrow">WebAssembly + three.js</p>
        <h1>STEP 3D Viewer</h1>
        <p className="subtitle">
          Просмотр .step/.stp файлов прямо в браузере: загрузите свой файл или воспользуйтесь
          готовым примером.
        </p>
      </div>

      <div className="controls">
        <label className="file-input" data-disabled={controlsDisabled}>
          <input
            type="file"
            accept=".step,.stp,model/step,application/step"
            onChange={onFileChange}
            disabled={controlsDisabled}
          />
          <span>Выбрать .step файл</span>
        </label>
        {isLoading && <div className="loader" aria-live="polite" />}
      </div>

      <SampleLibrary
        samples={samples}
        disabled={controlsDisabled}
        onSelect={onSampleSelect}
      />

      {error && <div className="error-banner">{error}</div>}
      <div className="color-controls">
        <div className="color-input">
          <label htmlFor="color-picker">Цвет</label>
          <input
            id="color-picker"
            type="color"
            value={selectionColor}
            onChange={onSelectionColorChange}
            aria-label="Выбор цвета для выделения"
          />
        </div>
        <div className="selection-info">
          <span className="selection-label">
            {selectedMeshName ? `Выбрано: ${selectedMeshName}` : 'Ничего не выбрано'}
          </span>
          <div className="selection-actions">
            <button
              type="button"
              className="secondary"
              onClick={onApplyColor}
              disabled={!selectedMeshName}
            >
              Применить цвет
            </button>
            <button
              type="button"
              className="ghost"
              onClick={onResetColor}
              disabled={!selectedMeshName}
            >
              Сбросить
            </button>
          </div>
        </div>
      </div>
      {children}
    </aside>
  )
}
