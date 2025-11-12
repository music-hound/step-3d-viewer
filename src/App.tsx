import { useEffect, useMemo, useState } from 'react'
import { useStepViewer } from './hooks/useStepViewer'
import { ViewerSurface } from './components/ViewerSurface'
import { ControlPanel } from './components/ControlPanel'
import { sampleModels } from './data/sampleModels'
import './styles/animations.css'
import './styles/base.css'
import './styles/sample-library.css'
import './styles/viewer.css'
import './styles/control-panel.css'

function App() {
  const viewer = useStepViewer()
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [isMobileLayout, setIsMobileLayout] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')

    const applyMatch = (matches: boolean) => {
      setIsMobileLayout(matches)
      if (matches) {
        setIsPanelOpen(false)
      }
    }

    applyMatch(mediaQuery.matches)

    const handleChange = (event: MediaQueryListEvent) => {
      applyMatch(event.matches)
      if (event.matches) {
        setIsPanelOpen(false)
      }
    }

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange)
    } else {
      mediaQuery.addListener(handleChange)
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange)
      } else {
        mediaQuery.removeListener(handleChange)
      }
    }
  }, [])

  const panelClassName = useMemo(
    () =>
      [
        'control-panel',
        isMobileLayout ? 'control-panel--mobile' : '',
        isPanelOpen ? 'control-panel--open' : 'control-panel--collapsed',
      ]
        .filter(Boolean)
        .join(' '),
    [isMobileLayout, isPanelOpen],
  )

  const panelId = 'control-panel'

  return (
    <div className="app" data-panel-open={isPanelOpen} data-mobile-layout={isMobileLayout}>
      <ViewerSurface
        canvasRef={viewer.canvasHostRef}
        hasModel={viewer.hasModel}
        isDragActive={viewer.isDragActive}
        isLoading={viewer.isLoading}
        isPanelOpen={isPanelOpen}
        panelId={panelId}
        onDragEnter={viewer.handleDragEnter}
        onDragLeave={viewer.handleDragLeave}
        onDragOver={viewer.handleDragOver}
        onDrop={viewer.handleDrop}
        onTogglePanel={() => setIsPanelOpen(true)}
      >
        <ControlPanel
          className={panelClassName}
          ariaHidden={!isPanelOpen}
          error={viewer.error}
          isLoading={viewer.isLoading}
          controlsDisabled={viewer.controlsDisabled}
          onFileChange={viewer.handleFileInput}
          onHidePanel={() => setIsPanelOpen(false)}
          selectionColor={viewer.selectionColor}
          onSelectionColorChange={(event) => viewer.setSelectionColor(event.target.value)}
          selectedMeshName={viewer.selectedMeshName}
          onApplyColor={viewer.applyColorToSelection}
          onResetColor={viewer.resetSelectionColor}
          samples={sampleModels}
          onSampleSelect={(sample) => viewer.loadSample(sample.url, sample.label, sample.fileName)}
        />
      </ViewerSurface>
    </div>
  )
}

export default App
