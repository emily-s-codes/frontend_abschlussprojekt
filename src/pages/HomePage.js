import React from 'react'
import Bonus from '../components/Bonus'
import Navbar from "../components/Navbar"
import SingleProduct from "../components/SingleProduct"
import Footer from "../components/Footer"

function HomePage() {
    return (
        <div className='homeStyle'><h2>Find your favourite Product</h2>
            <Navbar />
            <Bonus />
            <h3>Popular</h3>
            <div className='homeProductDisplay'>
                <SingleProduct />
            </div>
            <Footer />
        </div>
    )
}

export default HomePage