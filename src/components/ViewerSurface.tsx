import type { DragEventHandler, MutableRefObject, ReactNode } from 'react'

interface ViewerSurfaceProps {
  canvasRef: MutableRefObject<HTMLDivElement | null>
  hasModel: boolean
  isDragActive: boolean
  isLoading: boolean
  isPanelOpen: boolean
  panelId: string
  onDragEnter: DragEventHandler<HTMLDivElement>
  onDragLeave: DragEventHandler<HTMLDivElement>
  onDragOver: DragEventHandler<HTMLDivElement>
  onDrop: DragEventHandler<HTMLDivElement>
  onTogglePanel: () => void
  children: ReactNode
}

export function ViewerSurface({
  canvasRef,
  hasModel,
  isDragActive,
  isLoading,
  isPanelOpen,
  panelId,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
  onTogglePanel,
  children,
}: ViewerSurfaceProps) {
  return (
    <section
      className={`viewer ${isDragActive ? 'viewer--active' : ''}`}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <div ref={canvasRef} className="viewer__canvas" />
      {!hasModel && (
        <div className="viewer__placeholder">
          <p>Сюда можно перетащить .step/.stp файл.</p>
          <p className="muted">Либо воспользуйтесь панелью управления.</p>
        </div>
      )}
      {isDragActive && <div className="viewer__drop-hint">Отпустите файл, чтобы начать импорт</div>}
      {isLoading && (
        <div className="viewer__loading" aria-live="polite">
          <div className="viewer__loading-spinner" />
          <p>Импортируем модель...</p>
        </div>
      )}

      {!isPanelOpen && (
        <button
          type="button"
          className="panel-toggle"
          aria-expanded={false}
          aria-controls={panelId}
          onClick={onTogglePanel}
        >
          Меню
        </button>
      )}

      {children}
    </section>
  )
}
