import IProduct from '../interfaces/IProduct';
import Loading from '../components/Loading';
import { FC } from 'react';

interface props {
  products: IProduct[];
  isLoading: boolean;
}

const Home: FC<props> = ({ products, isLoading }) => {
  return (
    <div className="">
      {isLoading && <Loading />}
      {!isLoading && products && (
        <div>
          {products.map((product, e) => (
            <div key={e}>
              <img src={product.photo} />
              <a href={product.link}>
              <p>{product.description}</p>
              </a>
              <span>{product.price}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
