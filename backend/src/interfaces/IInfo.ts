import IProduct from './IProduct';
import IScrapper from './IScrapper';

export default interface IInfo extends IScrapper {
  data: IProduct[];
}
