var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as puppeteer from 'puppeteer';
function meliScrapper(category) {
    return __awaiter(this, void 0, void 0, function* () {
        const browser = yield puppeteer.launch({ headless: false });
        const page = yield browser.newPage();
        yield page.goto(`lista.mercadolivre.com/${category}`);
        page.evaluate(() => console.log(Array.from(document.querySelectorAll('.ui-search-layout__item'))));
        //   await browser.close();
    });
}
function buscaScrapper(category) {
    return __awaiter(this, void 0, void 0, function* () {
        const browser = yield puppeteer.launch();
        const page = yield browser.newPage();
        yield page.goto(`lista.mercadolivre.com/${category}`);
        const pageTitle = yield page.title();
        yield browser.close();
    });
}
export function main({ url, category }) {
    return __awaiter(this, void 0, void 0, function* () {
        switch (url) {
            case 'mercadolivre':
                meliScrapper(category);
            case 'buscape':
                buscaScrapper(category);
        }
    });
}
main({ url: 'mercadolivre', category: 'celular' });
