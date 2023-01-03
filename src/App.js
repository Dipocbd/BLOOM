import React from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home"
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
// import Search from './components/Search';


const App = () => {
  return (
    <Router>
    <Navbar />
    {/* <Search/> */}
   <Routes>
     <Route path='/' element={<Home/>}></Route>
    <Route path='/productList' element={<ProductList/>}></Route>
    <Route path='/product' element={<Product/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
</Routes> 
</Router>
  )
}

export default App
