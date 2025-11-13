import type { MouseEvent, PointerEvent } from 'react'

interface ContextMenuProps {
  x: number
  y: number
  onExtinguish: () => void
  onChangeColor: (hex: string) => void
  currentColor: string
  palette: string[]
  onPaletteColorSelect: (color: string) => void
  canApplyColor: boolean
}

export function ContextMenu({
  x,
  y,
  onExtinguish,
  onChangeColor,
  currentColor,
  palette,
  onPaletteColorSelect,
  canApplyColor,
}: ContextMenuProps) {
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
      {palette.length > 0 && (
        <div className="context-menu__palette">
          <p className="context-menu__label">Палитра</p>
          <div className="context-menu__swatches">
            {palette.map((color) => (
              <button
                key={color}
                type="button"
                className="context-menu__swatch"
                style={{ background: color }}
                onClick={() => onPaletteColorSelect(color)}
                disabled={!canApplyColor}
                aria-label={`Применить цвет ${color}`}
              >
                {color.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
      <button type="button" role="menuitem" onClick={onExtinguish}>
        Погасить выделенное тело
      </button>
    </div>
  )
}
