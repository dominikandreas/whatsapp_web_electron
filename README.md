# WhatsApp Web App using Electron

# TL;DR: Download and use immediately (Windows only):
   Download the folder ``WhatsAppWeb-win32-x64`` and run the ``WhatsAppWeb.exe``

# Introduction

This is a minimal Electron application based on the [Quick Start Guide](http://electron.atom.io/docs/tutorial/quick-start).

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.

## Develop

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

- Install dependencies
``npm install``
- Run the app
``npm start``

If you want to create a standalone app for a different website, just edit the main.js and replace the ``web.whatsapp.com`` address with something else. You can also replace the icon by changing the favicon.ico in the root of this repo.


## To compile into app (Windows, Linux, MacOS):

- install electron-packager: ``npm install -g electron-packager``
- execute packager in the root folder of this repository:
  ``electron-packager .``


## License

[CC0 1.0 (Public Domain)](LICENSE.md)
