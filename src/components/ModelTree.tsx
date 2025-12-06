import type { MeshTreeNode } from '../hooks/useStepViewer'

interface ModelTreeProps {
  nodes: MeshTreeNode[]
  selectedId: string | null
  onSelect: (id: string) => void
  disabled?: boolean
}

export function ModelTree({ nodes, selectedId, onSelect, disabled }: ModelTreeProps) {
  return (
    <div className="model-tree">
      <div className="model-tree__header">
        <p className="section-label">Дерево модели</p>
        <span className="model-tree__count">{nodes.length}</span>
      </div>
      <div className="model-tree__list" role="tree">
        {nodes.map((node) => (
          <button
            key={node.id}
            type="button"
            role="treeitem"
            className="model-tree__item"
            data-selected={node.id === selectedId}
            onClick={() => onSelect(node.id)}
            disabled={disabled}
            aria-selected={node.id === selectedId}
          >
            <span className="model-tree__item-label">{node.label}</span>
            {!node.visible && <span className="model-tree__item-muted">скрыто</span>}
          </button>
        ))}
        {!nodes.length && (
          <p className="model-tree__empty">Загрузите модель, чтобы увидеть список тел.</p>
        )}
      </div>
    </div>
  )
}
