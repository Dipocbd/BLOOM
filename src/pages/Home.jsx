import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Trending from '../components/Trending'
import Catalogue from '../components/Catalogue'

const Homepage = () => {
  return (
    <div>
        <Trending />
        <Navbar />
        <Slider />
        <Catalogue />
    </div>
  )
}

export default Homepage