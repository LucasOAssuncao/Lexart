import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import axios from 'axios';
import Home from './pages/Home';
import IProduct from './interfaces/IProduct';

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function infoFetch(url: string, category: string, filter: string) {
    setIsLoading(true);
    axios
      .get(`https://api-lexart.onrender.com/products?url=${url}&category=${category}`)
      .then(({ data }) => {
        setProducts(
          data.data.filter((e: IProduct) =>
            e.description.toLowerCase().includes(filter.toLowerCase())
          )
        );
        setIsLoading(false);
      });
  }

  return (
    <div className='App'>
      <Header infoFetch={infoFetch} />
      <Home products={products} isLoading={isLoading} />
    </div>
  );
}

export default App;
