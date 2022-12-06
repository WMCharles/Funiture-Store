import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './components/Products';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Item from './components/Item';
import Cart from './components/Cart';
import Contact from './components/Contact';
import { useState } from 'react';
import './App.css';
import AddProduct from './components/AddProducts';

function App() {

  const [cart, setCart] = useState([])

  // Add Item to Cart
  function addToCart(item) {
    const filterCart = cart.filter((product) => product.id !== item.id)
    const newCart = [...filterCart, item]
    setCart(newCart)
  }

  // Remove Item From Cart
  function removeFromCart(item) {
    const newCart = cart.filter((product) => product.id !== item.id)
    setCart(newCart)
  }

  // Function that updates item quantity in cart
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].quantity += d;

    if (arr[ind].quantity === 0) {
      arr[ind].quantity = 1;
    }
    setCart([...arr]);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='products/:id' element={<Item addToCart={addToCart} />} />
        <Route path='cart' element={<Cart cart={cart} removeItem={removeFromCart} handleChange={handleChange} />} />
        <Route path='contact' element={<Contact />} />
        <Route path='addproduct' element={<AddProduct />} />
        <Route path='products/edit/:id' element={<AddProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
