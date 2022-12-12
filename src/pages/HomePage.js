import React, { useEffect, useState } from 'react'
import Bonus from '../components/Bonus'
import Navbar from "../components/Navbar"
import SingleProduct from "../components/SingleProduct"
import Footer from "../components/Footer"

const apiData = "https://dummyjson.com/products";

function HomePage() {
    const [arrayData, setArrayData] = useState([]);

    useEffect(() => {
        fetch(apiData)
            .then((response) => response.json())
            .then((arrayData) => {
                setArrayData(arrayData)
                console.log(arrayData.products)
            })
    }, [])


    return (
        <div><h2>Find your favourite product</h2>
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