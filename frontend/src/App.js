import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import './App.css';
import About from './pages/about';
import Account from './pages/account';
import Cart from './pages/cart';
import Contact from './pages/contact';
import Login from './pages/login';
import Register from './pages/register';
import Shop from './pages/shop';
import Sproduct from './pages/sproduct';
import Blog from './pages/blog';
import Checkout from './pages/checkout';
import PrivateRoutes from './utils/PrivateRoutes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VerifyEmail from './pages/VerifyEmail';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/sproduct' element={<Sproduct />} />
          <Route path="/verify-email/:token" element={<VerifyEmail />} />
          <Route element={<PrivateRoutes />}>
            <Route path='/account' element={<Account />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
};

export default App;