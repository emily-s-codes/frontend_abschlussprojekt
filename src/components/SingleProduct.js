import React, { useEffect, useState } from 'react';
import ratingStar from "../assets/img/Star.png";
import { Link } from 'react-router-dom';


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
        <div className='SProductDiv'>
            {arrayData?.products?.map(product => {
                return (
                    <div id='cardStyle' key={product.id}>
                        <Link to={`/product/${product.id}`}>
                            <img id='imgStyle' src={product.thumbnail} alt={product.title}></img>
                            <div className='ratingDiv'>
                                <img id='starStyle' src={ratingStar} alt="star"></img>
                                <p id='ratingStyle'>{product.rating}</p>
                            </div>
                            <p id='titleStyle'>{product.title}</p>
                            {/* <p id="inStock">In stock: {product.stock}</p> */}
                            <div className='addToCart1_flex'>
                                <p id='priceStyle'>${product.price}</p>
                                <button className="addToCart1">+</button>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default SingleProduct