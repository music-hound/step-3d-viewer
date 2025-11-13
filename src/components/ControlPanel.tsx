import { useRef, type ChangeEventHandler, type ChangeEvent, type ReactNode } from 'react'
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
  onSaveSceneState: () => void
  onLoadSceneState: (file: File) => void
  sceneStateDisabled: boolean
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
  onSaveSceneState,
  onLoadSceneState,
  sceneStateDisabled,
  samples,
  onSampleSelect,
  children,
}: ControlPanelProps) {
  const sceneStateInputRef = useRef<HTMLInputElement | null>(null)

  const handleSceneStateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      onLoadSceneState(file)
    }
    event.target.value = ''
  }

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
      <div className="scene-state-actions">
        <p className="section-label">Изменения</p>
        <div className="scene-state-actions__buttons">
          <button
            type="button"
            className="secondary"
            onClick={onSaveSceneState}
            disabled={sceneStateDisabled}
          >
            Сохранить
          </button>
          <button
            type="button"
            className="ghost"
            onClick={() => sceneStateInputRef.current?.click()}
            disabled={sceneStateDisabled}
          >
            Загрузить
          </button>
        </div>
        <input
          ref={sceneStateInputRef}
          type="file"
          accept="application/json"
          onChange={handleSceneStateChange}
          style={{ display: 'none' }}
        />
      </div>
      {children}
    </aside>
  )
}
