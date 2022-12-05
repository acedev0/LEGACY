'use strict'

import { app, protocol, BrowserWindow } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1250,
    height: 875,
    webPreferences: {
    	devTools: false,    // prevent DevTools from opening !!! 
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS3_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()


  // Now run shell script
  Run_SHELL_SCRIPTS_on_STARTUP()


})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}



/*
  MAIN AREA FOR My Stuff
*/

const os = require('os');

// const platforms = {
//   WINDOWS: 'WINDOWS',
//   MAC: 'MAC',
//   LINUX: 'LINUX',
//   SUN: 'SUN',
//   OPENBSD: 'OPENBSD',
//   ANDROID: 'ANDROID',
//   AIX: 'AIX',
// };

// const platformsNames = {
//   win32: platforms.WINDOWS,
//   darwin: platforms.MAC,
//   linux: platforms.LINUX,
//   sunos: platforms.SUN,
//   openbsd: platforms.OPENBSD,
//   android: platforms.ANDROID,
//   aix: platforms.AIX,
// };

// const currentPlatform = platformsNames[os.platform()];

// const findHandlerOrDefault = (handlerName, dictionary) => {
//   const handler = dictionary[handlerName];

//   if (handler) {
//     return handler;
//   }

//   if (dictionary.default) {
//     return dictionary.default;
//   }

//   return () => null;
// };

// const byOS = findHandlerOrDefault.bind(null, currentPlatform);

// // usage
// const whatIsHeUsing = byOS({
//   [MAC]: username => `Hi ${username}! You are using Mac.`,
//   [WINDOWS]: username => `Hi ${username}! You are using Windows.`,
//   [LINUX]: username => `Hi ${username}! You are using Linux.`,
//   default: username => `Hi ${username}! You are using something different.`,
// });




var exec = require('child_process').exec;

function Run_SHELL_SCRIPTS_on_STARTUP() {
  var ostemp = os.platform()

  var CURRENT_OS = ""
  var API_EXEC = ""
  if (ostemp == "darwin") {
    CURRENT_OS = "mac"
    API_EXEC = "./MaxMet_Backend.mac --rest"
  } else {
    CURRENT_OS = "win"
    API_EXEC = "MaxMet_Backend.exe --rest"
  }


  console.log("You are using: " + CURRENT_OS); // => Hi Maciej Cieslar! You are using Mac.
  console.log("The Backend File is: " + API_EXEC); // => Hi Maciej Cieslar! You are using Mac.

  //exec('touch /tmp/terry_IT_WORKS_AWESOMELY.txt', {
  exec(API_EXEC , {    
    cwd: '.'
  }, function(error, stdout, stderr) {
    // work with result
  });

}