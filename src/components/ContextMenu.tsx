import type { MouseEvent, PointerEvent } from 'react'

interface ContextMenuProps {
  x: number
  y: number
  onExtinguish: () => void
  onChangeColor: (hex: string) => void
  currentColor: string
}

export function ContextMenu({ x, y, onExtinguish, onChangeColor, currentColor }: ContextMenuProps) {
  const stopPropagation = (event: MouseEvent<HTMLDivElement> | PointerEvent<HTMLDivElement>) => {
    event.stopPropagation()
  }

  return (
    <div
      className="context-menu"
      style={{ top: `${y}px`, left: `${x}px` }}
      role="menu"
      onClick={stopPropagation}
      onPointerDown={stopPropagation}
    >
      <div className="context-menu__group">
        <p className="context-menu__label">Цвет выделения</p>
        <input
          type="color"
          aria-label="Выбрать цвет выделенного тела"
          value={currentColor}
          onChange={(event) => onChangeColor(event.target.value)}
        />
      </div>
      <button type="button" role="menuitem" onClick={onExtinguish}>
        Погасить выделенное тело
      </button>
    </div>
  )
}
