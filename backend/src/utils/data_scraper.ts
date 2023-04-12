import * as puppeteer from 'puppeteer';
import IScrapper from '../Interfaces/IScrapper';

async function meliScrapper(category: string) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(`https://lista.mercadolivre.com.br/${category}`);
  page.evaluate(() => {
    const cleiton = Array.from(
      document.querySelectorAll(
        '.ui-search-layout__item div.ui-search-result__image.shops__picturesStyles > a'
      )
    ) as HTMLAnchorElement[];
    console.log(cleiton[0].href);
    // const pi = document.querySelectorAll('.ui-search-layout__item');
    
  });
  // page.evaluate(() => console.log(Array.from(document.querySelectorAll('.ui-search-layout__item .ui-search-link'))))
  // page.evaluate(() => console.log(Array.from(document.querySelectorAll('.ui-search-layout__item')).map((product) => ({
  //   title: product.querySelector('.ui-search-item__title')?.textContent,
  //   price: product.querySelector('.price-tag-fraction')?.textContent,
  //   link: product.querySelector('.ui-search-link')?.href,
  // }))))
  // await browser.close();
}

async function buscaScrapper(category: string) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`lista.mercadolivre.com/${category}`);
  const pageTitle = await page.title();
  await browser.close();
}

export async function main({ url, category }: IScrapper) {
  switch (url) {
    case 'mercadolivre':
      meliScrapper(category);
      break;
    case 'buscape':
      buscaScrapper(category);
      break;
  }
}

main({ url: 'mercadolivre', category: 'celular' });
