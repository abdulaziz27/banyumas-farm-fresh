import Home from './pages/home';
import './App.css';
import About from './pages/about';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Account from './pages/account';
import Cart from './pages/cart';
import Contact from './pages/contact';
import Login from './pages/login';
import Register from './pages/register';
import Shop from './pages/shop';
import Sproduct from './pages/sproduct';
import Blog from './pages/blog';
import Checkout from './pages/checkout';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/account' element={<Account />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/shop' element={<Shop />}/>
          <Route path='/sproduct' element={<Sproduct />}/>
          <Route path='/checkout' element={<Checkout />}/>
        </Routes>
      </Router>
    </div>
  );  
}

export default App;
