interface ThemeToggleProps {
  theme: 'light' | 'dark'
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const nextThemeLabel = theme === 'light' ? 'тёмную' : 'светлую'
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`Переключить на ${nextThemeLabel} тему`}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {theme === 'light' ? '☾' : '☀︎'}
      </span>
      {theme === 'light' ? 'Тёмная' : 'Светлая'}
    </button>
  )
}
