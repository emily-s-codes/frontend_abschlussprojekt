import React, { useEffect, useState } from 'react';
import * as CiIcons from "react-icons/ci";


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
                        <img src={product.thumbnail}></img>
                        <p><CiIcons.CiStar />{product.rating}</p>
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default SingleProduct