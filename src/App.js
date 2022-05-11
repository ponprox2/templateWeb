// import logo from './logo.svg';
import './App.css';
import Index from './component';
import React from 'react'
import { Route, Routes,Link } from 'react-router-dom';
import Test from './component/test';
import MyAccount from './component/myAccount';
import Cart from './component/Cart';
import WishList from './component/wishList';
import ProductDetail from './component/productDetail';
import Shop from './component/shop';
import CheckOut from './component/CheckOut';

function App() {

  return (
    <div className="App">
    <>
    <ul>
      {/* <li><Link to="/">Test</Link></li>
      <li><Link to="/test">Index</Link></li>
      <li><Link to="/test1">Index</Link></li> */}
      {/* <ProductDetail/> */}
    </ul>
        </>
        <Routes>
                <Route path="/" element={<Index/>} exact /> 
                <Route path="/shop" element={<Shop/>} exact />
                <Route path="/checkout" element={<CheckOut/>} exact />
                <Route path="/test1" element={<ProductDetail/>} exact></Route>
                <Route path="/products-details" element={<ProductDetail/>} exact />
                {/* <Route path="/test" element={<Test/>} /> */}
                <Route path="/my-account" element={<MyAccount/>} exact />
                <Route path="/cart" element={<Cart/>} exact />
                <Route path="/wishlist" element={<WishList/>} exact />
        </Routes>
    </div>
  );
}

export default App;
