import React from 'react';
import Navbar from './components/Navbar/Navbar';

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import Women from './pages/Women';
import Men from './pages/Men';
import Kids from './pages/Kids';
import Footer from './components/Footer/Footer';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/cart/Cart';
import LoginSignup from './pages/LoginSignup';
import Breadcrum from './components/Breadcrum/Breadcrum';
 // Make sure to create a NotFound component

const App = () => {
  return (
    <>
      <div className='app'>
        <Navbar />
   
    <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/women' element={<ShopCategory category="Women" />} />
          <Route path='/men' element={<ShopCategory category="Men" />} />
          <Route path='/kids' element={<ShopCategory category="Kids" />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/product/:id" component={<Breadcrum/>}/>
          <Route path='/loginSignup' element={<LoginSignup />} />
         
        </Routes>       
      </div>
      <Footer /> 
    </>
  );
};

export default App;
