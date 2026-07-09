import type {
  DragEventHandler,
  MouseEventHandler,
  MutableRefObject,
  ReactNode,
  TouchEventHandler,
} from 'react'

interface ViewerSurfaceProps {
  canvasRef: MutableRefObject<HTMLDivElement | null>
  hasModel: boolean
  isDragActive: boolean
  isLoading: boolean
  isPanelOpen: boolean
  panelId: string
  onContextMenu: MouseEventHandler<HTMLElement>
  onTouchStart?: TouchEventHandler<HTMLElement>
  onTouchMove?: TouchEventHandler<HTMLElement>
  onTouchEnd?: TouchEventHandler<HTMLElement>
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
  onContextMenu,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
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
      onContextMenu={onContextMenu}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <div ref={canvasRef} className="viewer__canvas" />
      {!hasModel && (
        <div className="viewer__placeholder">
          <p>Drag a .step/.stp file here.</p>
          <p className="muted">Or use the control panel.</p>
        </div>
      )}
      {isDragActive && <div className="viewer__drop-hint">Release to import the file</div>}
      {isLoading && (
        <div className="viewer__loading" aria-live="polite">
          <div className="viewer__loading-spinner" />
          <p>Importing model...</p>
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
          Menu
        </button>
      )}

      {children}
    </section>
  )
}
