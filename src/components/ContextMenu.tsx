import type { MouseEvent } from 'react'

interface ContextMenuProps {
  x: number
  y: number
  onExtinguish: () => void
}

export function ContextMenu({ x, y, onExtinguish }: ContextMenuProps) {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
  }

  return (
    <div
      className="context-menu"
      style={{ top: `${y}px`, left: `${x}px` }}
      role="menu"
      onClick={handleClick}
    >
      <button type="button" role="menuitem" onClick={onExtinguish}>
        Погасить выделенное тело
      </button>
    </div>
  )
}
