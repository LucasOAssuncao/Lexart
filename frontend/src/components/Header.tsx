import React, { useState, FC } from 'react';

interface props {
  infoFetch: Function;
}

const Header: FC<props> = ({ infoFetch }) => {
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('');
  const [filter, setFilter] = useState('');

  return (
    <header className='pt-[40px] pb-[40px] w-[100vw] bg-blue-200'>
      <form className='sm:flex-col sm:w-[100%] md:flex md:flex-row md:justify-center md:gap-2'>
        <div className='flex mb-2 sm:w-[100vw]  sm:justify-center gap-10 md:w-auto md:gap-2'>
          <select
            name='url'
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[135px]'
          >
            <option value='' hidden>
              Web
            </option>
            <option value='todas'>Todas</option>
            <option value='mercadolivre'>MercadoLivre</option>
            <option value='buscape'>Buscapé</option>
          </select>
          <select
            name='category'
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[135px]'
          >
            <option value='' hidden>
              Categorias
            </option>
            <option value='geladeira'>Geladeira</option>
            <option value='tv'>Tv</option>
            <option value='celular'>Celular</option>
          </select>
        </div>
        <div className='flex mb-2 sm:w-[100%] sm:justify-center md:w-[60%] lg:w-[40%]'>
          <input
            type='text'
            name='filter'
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            placeholder='Digite sua busca...'
            className='shadow appearance-none border rounded py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline sm:w-[80%] md:w-[90%]'
          />
          <button
            className='text-sm font-medium w-20 text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            onClick={(e) => {
              e.preventDefault();
              infoFetch(url, category, filter);
            }}
          >
            Buscar
          </button>
        </div>
      </form>
    </header>
  );
};

export default Header;
