import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './component/Header/header';
import Home from './component/Home/home';
import Shop from './component/Shop/shop';
import About from './component/About/about';
import Services from './component/Services/services';
import Blog from './component/Blog/blog';
import Contacts from './component/Contacts/contacts';
import Cart from './component/Cart/cart';
import Checkout from './component/Checkout/checkout';
import Footer from './component/Footer/footer';

function App() {
  return (
    <Router>
      <>
        <Header />
        
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/shop' element={<Shop />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/contacts' element={<Contacts />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/checkout' element={<Checkout />}/>
        </Routes>

        <Footer />
      </>
    </Router>
  );
}

export default App;
