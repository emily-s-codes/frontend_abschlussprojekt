import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import { useParams } from "react-router-dom"

function ProductDetails() {
    const params = useParams();
    const [arrayData, setArrayData] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${params.id}`)
            .then((response) => response.json())
            .then((arrayData) => {
                setArrayData(arrayData)
            }, [])

        return (
            <div>
                <p>{arrayData.products[0].title}</p>
                <Footer />
            </div>
        )
    })
}

export default ProductDetails;