import React, { useEffect, useState } from 'react'
import Bonus from '../components/Bonus'
import Navbar from "../components/Navbar"
import SingleProduct from "../components/SingleProduct"
import Footer from "../components/Footer"

function HomePage() {
    const [arrayData, setArrayData] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products`)
            .then((response) => response.json())
            .then((arrayData) => {
                setArrayData(arrayData)
                console.log(arrayData.products)
            })
    }, [])


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