import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
// import Navbar from '../components/Navbar'
import Trending from '../components/Trending'
import Slider from '../components/Slider'
import Catalogue from '../components/Catalogue'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <Trending/>
        <Slider/>
        <Catalogue/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Homepage