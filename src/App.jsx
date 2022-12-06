import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './components/Products';
import NavBar from './components/NavBar';
import Item from './components/Item';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='products' element={<Products />} />
        <Route path='products/:id' element={<Item />} />
      </Routes>
    </Router>
  );
}

export default App;
