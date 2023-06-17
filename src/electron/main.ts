import { resolve } from "path";
import { app, BrowserWindow } from "electron";
import electronReload from "electron-reload";

electronReload(resolve(), {
  hardResetMethod: "exit",
});

app.on("ready", () => {
  const browser = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  browser.loadFile("../public/index.html");
});
