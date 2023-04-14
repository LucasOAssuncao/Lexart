import IProduct from '../interfaces/IProduct';
import Loading from '../components/Loading';
import { FC } from 'react';

interface props {
  products: IProduct[];
  isLoading: boolean;
}

const Home: FC<props> = ({ products, isLoading }) => {
  const options = { style: 'currency', currency: 'BRL' };
  const numberFormat = new Intl.NumberFormat('pt-br', options);
  return (
    <div className='p-[20px]'>
      {isLoading && <Loading />}
      {!isLoading && products && (
        <div className='sm:flex sm:flex-col gap-5'>
          {products.map((product, e) => (
            <div
              className='flex p-6 bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
              key={e}
            >
              <div className='flex items-start sm:w-[250px] sm:h-[200px]'>
                <img className='sm:w-[100%]' src={product.photo} />
              </div>
              <div className='p-2 flex flex-col gap-3'>
                <a href={product.link}>
                  <p className='sm:text-[12px]'>{product.description}</p>
                </a>
                <span className='sm:text-[22px] font-bold'>{`${numberFormat.format(
                  Number(product.price.replace('.', '').replace(',', '.'))
                )}`}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
