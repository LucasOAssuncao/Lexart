import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import axios from 'axios';
import Home from './pages/Home';
import IProduct from './interfaces/IProduct';

function App() {
  const [products, setProducts] = useState([]);
  function infoFetch(url: string, category: string, filter: string) {
    axios
      .get(`http://localhost:3001/products?url=${url}&category=${category}`)
      .then(({data}) => {
        setProducts(data.data.filter((e: IProduct) => e.description.toLowerCase().includes(filter.toLowerCase())))
        console.log(products);
      })
    }

  return <div className='App'>
    <Header infoFetch={infoFetch} />
    <Home products={products}/>
  </div>
}

export default App;
