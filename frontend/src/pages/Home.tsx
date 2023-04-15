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
        <div className='gap-5 sm:flex sm:flex-col xl:flex-row xl:flex-wrap xl:justify-center'>
          {products.map((product, e) => (
            <div
              className='flex p-2 bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 sm:flex-col xl:w-[300px]'
              key={e}
            >
              <div className='flex items-center justify-center sm:w-[100%] sm:h-[200px]'>
                <img className='sm:max-w-[200px] sm:max-h-[200px]' src={product.photo} />
              </div>
              <div className='p-2 flex flex-col gap-3 items-center justify-center text-center sm:w-[100%]'>
                <a href={product.link} target="_blank">
                  <p className='hover:text-gray-600 hover:font-medium transition-colors duration-100 sm:text-[13px] md:text-[20px]'>{product.description}</p>
                </a>
                <span className='sm:text-[22px] md:text-[24px] font-bold'>{`${numberFormat.format(
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
