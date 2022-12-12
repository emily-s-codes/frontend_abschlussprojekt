import React from 'react'
import Bonus from '../components/Bonus'
import Navbar from "../components/Navbar"
import SingleProduct from "../components/SingleProduct"
import Footer from "../components/Footer"

function HomePage() {
    return (
        <div>
            <Navbar />
            <Bonus />
            <SingleProduct />
            <Footer />
        </div>
    )
}

export default HomePage