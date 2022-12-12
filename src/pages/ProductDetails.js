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
                console.log(arrayData)
            })
    }, [params.id])
    return (
        <div>
            <p>{arrayData.title}</p>
            <Footer />
        </div>
    )

}

export default ProductDetails;