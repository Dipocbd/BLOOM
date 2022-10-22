import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Trending from '../components/Trending'
import Catalogue from '../components/Catalogue'
import Products from '../components/Products'

const Homepage = () => {
  return (
    <div>
        <Trending />
        <Navbar />
        <Slider />
        <Catalogue />
        <Products />
    </div>
  )
}

export default Homepage