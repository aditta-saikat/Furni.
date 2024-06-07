import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import Signin from './component/Signin/signin';

function App() {
  const location = useLocation();
  const showHeaderAndFooter = location.pathname !== '/signin';

  return (
    <>
      {showHeaderAndFooter && <Header />}
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/contacts' element={<Contacts />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/signin' element={<Signin />}/>
      </Routes>

      {showHeaderAndFooter && <Footer />}
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
