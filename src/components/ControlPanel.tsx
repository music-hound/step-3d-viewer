import { useRef, type ChangeEventHandler, type ChangeEvent, type ReactNode } from 'react'
import type { SampleModel } from '../data/sampleModels'
import type { MeshTreeNode } from '../hooks/useStepViewer'
import { SampleLibrary } from './SampleLibrary'
import { ModelTree } from './ModelTree'

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
  colorPalette: string[]
  onSelectPaletteColor: (color: string) => void
  onAddPaletteColor: () => void
  onRemovePaletteColor: (color: string) => void
  canAddPaletteColor: boolean
  onSaveSceneState: () => void
  onLoadSceneState: (file: File) => void
  sceneStateDisabled: boolean
  samples: SampleModel[]
  onSampleSelect: (sample: SampleModel) => void
  modelTree: MeshTreeNode[]
  selectedMeshId: string | null
  onSelectTreeNode: (id: string) => void
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
  colorPalette,
  onSelectPaletteColor,
  onAddPaletteColor,
  onRemovePaletteColor,
  canAddPaletteColor,
  onSaveSceneState,
  onLoadSceneState,
  sceneStateDisabled,
  samples,
  onSampleSelect,
  modelTree,
  selectedMeshId,
  onSelectTreeNode,
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
        aria-label="Close panel"
      >
        <span aria-hidden="true">&larr;</span>
      </button>
      <div className="panel__header">
        <p className="eyebrow">WebAssembly + three.js</p>
        <h1>STEP 3D Viewer</h1>
        
      </div>

      <div className="controls">
        <label className="file-input" data-disabled={controlsDisabled}>
          <input
            type="file"
            accept=".step,.stp,.STEP,.STP,model/step,application/step"
            onChange={onFileChange}
            disabled={controlsDisabled}
          />
          <span>Choose .step file</span>
        </label>
        {isLoading && <div className="loader" aria-live="polite" />}
      </div>

      <SampleLibrary
        samples={samples}
        disabled={controlsDisabled}
        onSelect={onSampleSelect}
      />
      <ModelTree
        nodes={modelTree}
        selectedId={selectedMeshId}
        onSelect={onSelectTreeNode}
        disabled={isLoading}
      />

      {error && <div className="error-banner">{error}</div>}
      <div className="color-controls">
        <div className="color-input">
          <label htmlFor="color-picker">Color</label>
          <input
            id="color-picker"
            type="color"
            value={selectionColor}
            onChange={onSelectionColorChange}
            aria-label="Select highlight color"
          />
        </div>
        <div className="selection-info">
          <span className="selection-label">
            {selectedMeshName ? `Selected: ${selectedMeshName}` : 'Nothing selected'}
          </span>
          <div className="selection-actions">
            <button
              type="button"
              className="primary"
              onClick={onApplyColor}
              disabled={!selectedMeshName}
            >
              Apply color
            </button>
            <button
              type="button"
              className="ghost"
              onClick={onResetColor}
              disabled={!selectedMeshName}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      <div className="color-palette">
        <div className="color-palette__header">
          <p className="section-label">Palette</p>
          <button
            type="button"
            className="ghost"
            onClick={onAddPaletteColor}
            disabled={!canAddPaletteColor}
          >
            Add color
          </button>
        </div>
        <div className="color-palette__list">
          {colorPalette.map((color) => (
            <button
              key={color}
              type="button"
              className="color-swatch"
              aria-label={`Color ${color}`}
              onClick={() => onSelectPaletteColor(color)}
              style={{ background: color }}
            >
              <span className="color-swatch__value">{color.toUpperCase()}</span>
              <span
                className="color-swatch__remove"
                role="button"
                aria-label="Remove color from palette"
                onClick={(event) => {
                  event.stopPropagation()
                  onRemovePaletteColor(color)
                }}
              >
                ×
              </span>
            </button>
          ))}
          {colorPalette.length === 0 && (
            <p className="color-palette__empty">No colors yet — add the current color.</p>
          )}
        </div>
      </div>
      <div className="scene-state-actions">
        <p className="section-label">Scene state</p>
        <div className="scene-state-actions__buttons">
          <button
            type="button"
            className="ghost"
            onClick={onSaveSceneState}
            disabled={sceneStateDisabled}
          >
            Save
          </button>
          <button
            type="button"
            className="ghost"
            onClick={() => sceneStateInputRef.current?.click()}
            disabled={sceneStateDisabled}
          >
            Load
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
