const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DynamicallyLoadedPage extends Page {
    /**
     * define selectors using getter methods
     */
    // get inputUsername () {
    //     return $('#username');
    // }

    get txtHelloWorld () {
        return $('h4*=Hello');
    }

    get btnStart () {
        return $('<button />');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('dynamic_loading/2');
    }
}

module.exports = new DynamicallyLoadedPage();