import * as puppeteer from 'puppeteer';
async function meliScrapper(category) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(`lista.mercadolivre.com/${category}`);
    page.evaluate(() => console.log(Array.from(document.querySelectorAll('.ui-search-layout__item'))));
    //   await browser.close();
}
async function buscaScrapper(category) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`lista.mercadolivre.com/${category}`);
    const pageTitle = await page.title();
    await browser.close();
}
export async function main({ url, category }) {
    switch (url) {
        case 'mercadolivre':
            meliScrapper(category);
        case 'buscape':
            buscaScrapper(category);
    }
}
main({ url: 'mercadolivre', category: 'celular' });
//# sourceMappingURL=data_scraper.js.map