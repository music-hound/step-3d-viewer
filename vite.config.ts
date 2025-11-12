import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

const repositoryBase = '/step-3d-viewer/'
const isGhBuild = process.env.BUILD_TARGET === 'gh-pages'
const basePath = isGhBuild ? repositoryBase : '/'

const MODELS_DIR = path.resolve(process.cwd(), 'public/models')

const ensureModelsDir = () => {
  if (!fs.existsSync(MODELS_DIR)) {
    fs.mkdirSync(MODELS_DIR, { recursive: true })
  }
}

const readModels = () => {
  ensureModelsDir()
  return fs
    .readdirSync(MODELS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isFile() && /\.(stp|step)$/i.test(entry.name))
    .map((entry) => ({
      fileName: entry.name,
      url: `${basePath}models/${entry.name}`,
    }))
}

const sampleModelsPlugin = () => {
  const virtualModuleId = 'virtual:sample-models'
  const resolvedVirtualModuleId = `\0${virtualModuleId}`

  const getModuleSource = () =>
    `export const sampleModelsManifest = ${JSON.stringify(readModels())};`

  const shouldHandle = (filePath: string) => path.resolve(filePath).startsWith(MODELS_DIR)

  return {
    name: 'sample-models-manifest',
    resolveId(id: string) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
      return null
    },
    load(id: string) {
      if (id === resolvedVirtualModuleId) {
        return getModuleSource()
      }
      return null
    },
    configureServer(server: import('vite').ViteDevServer) {
      const reload = () => {
        const module = server.moduleGraph.getModuleById(resolvedVirtualModuleId)
        if (module) {
          server.moduleGraph.invalidateModule(module)
        }
        server.ws.send({ type: 'full-reload' })
      }

      server.watcher.add(MODELS_DIR)
      server.watcher.on('add', (filePath) => {
        if (shouldHandle(filePath)) {
          reload()
        }
      })
      server.watcher.on('unlink', (filePath) => {
        if (shouldHandle(filePath)) {
          reload()
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: basePath,
  plugins: [react(), sampleModelsPlugin()],
})
