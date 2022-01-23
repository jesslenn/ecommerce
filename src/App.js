import React, {useState, useEffect} from 'react';
import { Products, Navbar } from './components'
import {commerce} from './lib/commerce'

const App = () => {
  const [products, setProducts] = useState([])

  //we do an asynchronous call to commerce to fetch all our products from their DB
  const fetchProducts = async () => {
    const {data} = await commerce.products.list();
    setProducts(data);
  }

  //useEffect with an empty array as its second argument will be called when the page is loaded
useEffect(() => {
  fetchProducts();
}, [])

  return (
    <div>
      <Navbar />
      <Products />
    </div>
  )
}

export default App;