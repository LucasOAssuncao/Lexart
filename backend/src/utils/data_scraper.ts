import * as puppeteer from 'puppeteer';
import IScrapper from '../Interfaces/IScrapper';

async function meliScrapper(category: string) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(`https://lista.mercadolivre.com.br/${category}`);
  try {
    const productsInfo = await page.evaluate((category) => {
      const productsUrls = Array.from(
        document.querySelectorAll(
          '.ui-search-layout__item div.ui-search-result__image.shops__picturesStyles > a'
        )
      ) as HTMLAnchorElement[];
      return Array.from(
        document.querySelectorAll('.ui-search-layout__item')
      ).map((product, i) => ({
        photo: product.querySelector('img')?.src || '',
        description:
          product.querySelector('.ui-search-item__title')?.textContent || '',
        price:
          product.querySelector(
            '.ui-search-price__second-line .price-tag-fraction'
          )?.textContent || '',
        link: productsUrls[i].href || '',
        category,
      }));
    }, category);
    await browser.close();
    return productsInfo;
  } catch (e) {
    throw e;
  }
}

async function buscapeScrapper(category: string) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  // page.setJavaScriptEnabled(false)
  await page.goto(`https://www.buscape.com.br/${category}`);
  try {
    const productsInfo = await page.evaluate((category) => {
      const productsUrls = Array.from(
        document.querySelectorAll('.Card_Card__LsorJ > a')
      ) as HTMLAnchorElement[];
      return Array.from(document.querySelectorAll('.Card_Card__LsorJ')).map(
        (product, i) => ({
          photo:
            product
              .querySelector('noscript')
              ?.textContent?.match(/src="([^"]*)"/)?.[1] ||
            product.querySelector('img')?.getAttribute('src') ||
            '',
          description: product.querySelector('h2')?.textContent || '',
          price:
            product.querySelector(
              '[role="button"] .Text_Text__h_AF6.Text_MobileHeadingS__Zxam2'
            )?.textContent || '',
          link: productsUrls[i].href || '',
          category,
        })
      );
    }, category);
    // await browser.close();
    console.log(productsInfo);
  } catch (e) {
    throw e;
  }
}

export async function infoScrapper({ url, category }: IScrapper) {
  switch (url) {
    case 'mercadolivre':
      meliScrapper(category);
      break;
    case 'buscape':
      buscapeScrapper(category);
      break;
  }
}

infoScrapper({ url: 'buscape', category: 'celular' });
