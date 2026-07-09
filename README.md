# STEP 3D Viewer

Interactive STEP/STP viewer that runs entirely in the browser. The app uses the WebAssembly build of OpenCascade (`occt-import-js`) together with three.js, so you can inspect CAD models without any backend: drag & drop a file or pick one from the control panel.

## Features

- 🔁 Drag & drop or upload STEP/STP files through the panel.
- 📚 Sample library — any `.stp/.step` file you place in `public/models` appears instantly in the UI.
- 🎨 Select meshes and recolor them on the fly.
- 🌓 WebGL rendering on top of three.js with a sleek dark theme.
- 📱 PWA-ready: install it on a phone home screen or pin it on desktop.
- ⚙️ Vite + React + TypeScript stack with a one-command GitHub Pages deploy.

## Getting Started

```bash
git clone https://github.com/<you>/step-3D-viewer.git
cd step-3D-viewer
npm install
npm run dev
```

Open `http://localhost:5173` — on desktop the control panel is hidden by default, click the “Menu” button to reveal it.

## Adding Your Own Models

1. Drop `.stp` or `.step` files into `public/models`.
2. During development the sample library updates automatically (we watch the folder via a Vite plugin).
3. For production builds make sure the files are in the repo before running `npm run build` or `npm run deploy`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Type-check + production bundle |
| `npm run build:gh` | Build with `/step-3d-viewer/` base path for GitHub Pages |
| `npm run preview` | Preview the production bundle locally |
| `npm run deploy` | `build:gh` + publish `dist` to the `gh-pages` branch |

Before deploying make sure the remote is configured and you have access to `gh-pages`:

```bash
git remote add origin git@github.com:<you>/step-3d-viewer.git
npm run deploy
```

## Project Structure

```
src/
 ├─ components/      # ControlPanel, SampleLibrary, ViewerSurface, etc.
 ├─ data/            # sampleModels.ts — sample list sourced from public/models
 ├─ hooks/           # custom hooks (useStepViewer)
 ├─ styles/          # modular CSS (base, viewer, panel, library)
 └─ main.tsx         # React entry point
public/
 ├─ models/          # your .stp/.step files
 └─ fav.png          # favicon / icon
```

## Tech Stack

- React 19 + TypeScript
- Vite 7
- three.js
- occt-import-js (OpenCascade via WebAssembly)
- ESLint (flat config), TypeScript path aliases, custom Vite plugin for the sample library

## License

MIT — feel free to fork, use, and improve. Pull requests are welcome! If you spot a bug or want to suggest a feature, open an issue.