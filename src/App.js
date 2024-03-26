import logo from './logo.svg';
import './App.scss';
import { useEffect, useReducer } from 'react';
import axios from 'axios';
import { cartReducer } from './reducers/cartReducer';
import Products from './components/products';
import Cart from './components/cart';

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: []
  });

  useEffect(() => {
    fetchProduct();
  }, [])

  const fetchProduct = async() => {
    const {data} = await axios.get("https://dummyjson.com/products");
    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products
    })
  }

  return (
    <div className="App">
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
