import React from 'react'
import FavouriteProducts from '../FavouriteProduct/FavouriteProducts'
import Products from '../Products/Products'
import Slider from '../Slider/Slider'

const Home = () => {
    return (
        <div>
            <Slider/>
            <Products/>
            <FavouriteProducts/>
        </div>
    )
}

export default Home
