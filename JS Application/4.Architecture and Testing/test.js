const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page; // Declare reusable variables;

describe('E2E tests', async function () {
    this.timeout(5000);

    before(async () => { browser = await chromium.launch({ headless: false, slowMo: 500}); });
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => {await page.close(); });

    it('loads article titles', async () => {
        await page.goto('http://localhost:5500');
        
        
        //await page.waitForTimeout(300) that is the past option to use.
        
        await page.waitForSelector('.accordion div.head>span');
        
        const content = await page.textContent('#main');

        expect(content).to.contain('Scalable Vector Graphics');
        expect(content).to.contain('Open standard');
        expect(content).to.contain('Unix');
        expect(content).to.contain('ALGOL');
    })
})