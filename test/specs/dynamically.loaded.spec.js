const DynamicallyLoadedPage = require('../pageobjects/dynamically.loaded.page');

describe('My Dynamically Loaded Page', () => {
    it('should click the Start button', async () => {
        await DynamicallyLoadedPage.open();
        await (DynamicallyLoadedPage.btnStart).click();
        await browser.pause(2000)
    });

    it('should run a while loop on the h4', async () => {
        // let txtHelloWorld = true
    });
});