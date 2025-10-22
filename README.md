# Battleship AI game  
A Battleship app where the user can play against an AI opponent built with **Electron Forge**, **React**, **TypeScript**, and **Webpack**.  

---

## Prerequisites
- [Node.js](https://nodejs.org/) (LTS recommended, `>=18`)
- [npm](https://www.npmjs.com/)

---

## Setup

Clone the repo and install dependencies:

```bash
git clone https://github.com/your-username/sensor-speed-stand-full.git
cd battleship-ai-game
npm install
```

---

## Development

Run the app in development mode:

```bash
npm start
```

This will:
- Build the **main process** (`src/main`)
- Bundle the **React/renderer code** (`src/renderer`)
- Launch Electron and hot reload (only for renderer changes)

---

## Build (without installer)

Package the app into a distributable folder (not an installer):

```bash
npm run package
```

Output goes to:

```
out/
```

---

## Create an Executable

Build an installer for your operating system:

```bash
npm run make
```

The generated installers will be available in:

```
out/make/
```

- **Windows** → `.exe`  
- **macOS** → `.dmg` or `.zip`  
- **Linux** → `.deb`, `.rpm`, or `.AppImage`

---

## Available npm Scripts

- `npm start` → Run in development mode with hot reload  
- `npm run package` → Build app into `out/` (no installer)  
- `npm run make` → Create a distributable installer  
- `npm run publish` → Publish builds (requires configuration)  
- `npm run lint` → Run ESLint on `.ts` and `.tsx` files  

---

## Project Structure

```
src/
├── main/                     # Electron main process code
├── renderer/                 # React frontend
│   ├── components/           
│   │   ├── app/              # App component
│   │   └── customComponent/   # Custom UI component
│   ├── index.tsx             # React entry point
│   └── renderer.ts           # Webpack renderer entry
index.html                    # HTML template
forge.config.ts               # Electron Forge config
webpack.main.config.ts        # Webpack config for main process
webpack.renderer.config.ts    # Webpack config for renderer
webpack.plugins.ts            # Shared Webpack plugins
webpack.rules.ts              # Shared Webpack loaders
tsconfig.json                 # TypeScript config
.eslintrc.json                # ESLint config
```

### Component structure

Component folder and file names should be in ```camelCase```.
Components are seperated into three files:

```
├── customComponent/           
│   ├── customComponent.css              # Compent styling
|   ├── customComponent.tsx              # Main component functionality
│   └── customComponent.types.ts         # Any types needed (think of this as parameters for the component)
```

The compenent function should be named in ```PascalCase```:
```
export default CustomComponent ...
```

as for types, the interface should be called ```ComponentProps```:
```
export interface CustomComponentProps ...
```

---

## Security Notes

- `contextIsolation: true` is enabled in `BrowserWindow`  
- APIs are exposed only via `preload.ts` using `contextBridge`  
- `nodeIntegration` is disabled in the renderer for security  
