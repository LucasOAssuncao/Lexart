import IProduct from '../interfaces/IProduct';
import { FC } from 'react';

interface props {
  products: IProduct[];
}

const Home: FC<props> = ({ products }) => {
  return (
    <div>
      {products && (
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
