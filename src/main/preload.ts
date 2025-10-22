// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";
import { Titlebar, TitlebarColor } from 'custom-electron-titlebar';

// theme colors
const TITLEBAR_COLOR_LIGHT = '#ededed';
const TITLEBAR_COLOR_DARK = '#1f1f1f';

contextBridge.exposeInMainWorld('nativeTheme', {
    getTheme: () => ipcRenderer.invoke('nativeTheme.getTheme'),
    setTheme: async (theme: 'dark' | 'light') => {
        ipcRenderer.invoke('nativeTheme.setTheme', theme);
        if (titlebar) {
            titlebar.updateBackground(theme === 'dark' ? TitlebarColor.BLACK : TitlebarColor.WHITE)
        }
    },
})

// Setup Titlebar
let titlebar: Titlebar | undefined = undefined;
window.addEventListener('DOMContentLoaded', async () => {
    // get initial theme
    let theme = await ipcRenderer.invoke('nativeTheme.getTheme');
    titlebar = new Titlebar({
        backgroundColor: theme === 'light' ? TitlebarColor.fromHex(TITLEBAR_COLOR_LIGHT) : TitlebarColor.fromHex(TITLEBAR_COLOR_DARK),
        containerOverflow: 'hidden',
    });
});

// update this global as you add more preload bindings to ensure the body of the application knows the types
declare global {
    interface Window { 
        nativeTheme: {
            getTheme: () => Promise<'dark' | 'light'>
            setTheme: (theme: 'dark' | 'light') => Promise<void>
        }
    }
}