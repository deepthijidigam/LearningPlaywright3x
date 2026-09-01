class BasePage {
    constructor(pageName) {
        this.pageName = pageName;
    }

    open() {
        console.log('Open ' + this.pageName + ' page');
    }
    close() {
        console.log('Close ' + this.pageName + ' page');
    }
}

class LoginPage extends BasePage {

}

let page = new LoginPage('login');
page.open();
page.close();