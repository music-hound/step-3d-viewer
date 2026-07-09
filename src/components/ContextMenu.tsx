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
        <p className="context-menu__label">Highlight color</p>
        <input
          type="color"
          aria-label="Select highlighted body color"
          value={currentColor}
          onChange={(event) => onChangeColor(event.target.value)}
        />
      </div>
      {palette.length > 0 && (
        <div className="context-menu__palette">
          <p className="context-menu__label">Palette</p>
          <div className="context-menu__swatches">
            {palette.map((color) => (
              <button
                key={color}
                type="button"
                className="context-menu__swatch"
                style={{ background: color }}
                onClick={() => onPaletteColorSelect(color)}
                disabled={!canApplyColor}
                aria-label={`Apply color ${color}`}
              >
                {color.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
      <button type="button" role="menuitem" onClick={onExtinguish}>
        Hide selected body
      </button>
    </div>
  )
}
