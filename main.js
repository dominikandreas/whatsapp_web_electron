const electron = require('electron')

const Menu = electron.Menu
const Tray = electron.Tray
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow


const path = require('path')
const fs = require('fs')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  let iconPath =   __dirname + '/resources/app/favicon.ico'
  if (!fs.existsSync(iconPath)) {
    iconPath = __dirname + '/favicon.ico'
  }
  
  console.log(iconPath);
  mainWindow = new BrowserWindow({width: 800, height: 600, icon: iconPath})
  mainWindow.setMenu(null);

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: 'web.whatsapp.com',
    protocol: 'https:',
    slashes: true
  }))

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
  mainWindow.on('minimize',function(event){
    event.preventDefault()
        mainWindow.hide();   
  });



  mainWindow.on('close', app.quit);
  
  tray = new Tray(iconPath)
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Show', click:  function(){ mainWindow.show();} },
    {label: 'Quit', click:  function(){
            app.isQuiting = true;
            app.quit();

        } }
  ])
  tray.on('click', function(){mainWindow.show();})
  tray.setToolTip('WhatsApp Web')
  tray.setContextMenu(contextMenu)
}

app.on('window-all-closed', app.quit);


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)


app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
