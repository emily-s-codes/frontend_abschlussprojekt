import React, { useEffect, useState } from 'react';
import ratingStar from "../assets/img/Star.png"


function SingleProduct() {
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
            {arrayData?.products?.map(product => {
                return (
                    <div key={product.id}>
                        <img src={product.thumbnail} alt={product.title}></img>
                        <div className='ratingDiv'>
                            <img src={ratingStar} alt="star"></img>
                            <p>{product.rating}</p>
                        </div>
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default SingleProduct