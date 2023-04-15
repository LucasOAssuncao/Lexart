import ProductsODM from '../models/ProductsODM';
import { infoScrapper } from '../utils/data_scrapper';
import type IScrapper from '../interfaces/IScrapper';
import IInfo from '../interfaces/IInfo';

export default async function getAll(args: IScrapper): Promise<IInfo> {
  const { url, category } = args;
  const productsODM = new ProductsODM();
  const storedInfo = await productsODM.find(url as string, category);
  
  if (storedInfo) {
    return storedInfo;
  }
  
  const products = await infoScrapper({ url, category });
  await productsODM.deleteMany();
  const data = await productsODM.create({ url, category, data: products });
  
  return data;
}
