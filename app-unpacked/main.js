const { app, BrowserWindow, shell, nativeImage } = require('electron');
const path = require('path');
const fs = require('fs');

if (!app.requestSingleInstanceLock()) {
  app.quit();
}

const createWindow = () => {
  // Try to load icon, use default if not found
  let appIcon;
  const iconPath = path.join(__dirname, 'build', 'app.ico');
  if (fs.existsSync(iconPath)) {
    appIcon = nativeImage.createFromPath(iconPath);
  }

  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 1000,
    minHeight: 680,
    backgroundColor: '#0b1220',
    title: 'AGUA POTABLE SAN ANTONIO',
    autoHideMenuBar: true,
    webPreferences: {
      devTools: true,
      contextIsolation: true,
      sandbox: true
    },
    icon: appIcon
  });

  // Cargar la copia estática del index.html
  win.loadFile(path.join(__dirname, 'static', 'index.html'));

  // Abrir enlaces externos en navegador del sistema
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });
};

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('second-instance', () => {
  const [w] = BrowserWindow.getAllWindows();
  if (w) { if (w.isMinimized()) w.restore(); w.focus(); }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

