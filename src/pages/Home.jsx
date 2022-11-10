import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Trending from '../components/Trending'
import Catalogue from '../components/Catalogue'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'

const Homepage = () => {
  return (
    <div>
        <Trending />
        <Navbar />
        <Slider />
        <Catalogue />
        <Products />
        <Newsletter />
    </div>
  )
}

export default Homepage