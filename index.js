const {app, BrowserWindow} = require('electron');
const {Api} = require('./src/api/base.es');

const defaultWindowsProperties = {
    height: 300,
    width: 500,
};

const appWindows = {};

function main() {
    const {height, width} = defaultWindowsProperties;

    appWindows.mainPage = new BrowserWindow({
        height,
        width
    });

    console.log(Api);

    Api.get('http://google.com/img.png');

    appWindows.mainPage.loadFile(`${__dirname}/views/mainPage.html`);

    appWindows.mainPage.on('closed', () => {
        appWindows.mainPage = null;
    });
}

app.on('ready', main);

app.on('window-all-closed', () => {
    app.quit();
});