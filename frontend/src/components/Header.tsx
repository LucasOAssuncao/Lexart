import React, { useState, FC } from 'react';

interface props {
  infoFetch: Function;
}

const Header: FC<props> = ({ infoFetch }) => {
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('');
  const [filter, setFilter] = useState('');

  return (
    <header className=''>
      <form className=''>
        <div>
          <select
            name='url'
            value={url}
            onChange={(event) => setUrl(event.target.value)}
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
          >
            <option value='' hidden>
              Categorias
            </option>
            <option value='geladeira'>Geladeira</option>
            <option value='tv'>Tv</option>
            <option value='celular'>Celular</option>
          </select>
        </div>
        <input
          type='text'
          name='filter'
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          placeholder='Digite sua busca...'
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            infoFetch(url, category, filter);
          }}
        >
          Buscar
        </button>
      </form>
    </header>
  );
};

export default Header;
