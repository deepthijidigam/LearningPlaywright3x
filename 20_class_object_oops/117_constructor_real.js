class Browser {
    constructor(browserName) {
        this.browserName = browserName;
        this.isOpen = true;
        console.log(browserName + ' launched');
    }

    startBrowser() {
        console.log('Starting the browser....');
    }

    closeBrowser() {
        console.log('Close the browser');
    }
}

let chrome = new Browser('chrome');
let firefox = new Browser('firefox');

console.log(chrome.isOpen);
chrome.startBrowser();
