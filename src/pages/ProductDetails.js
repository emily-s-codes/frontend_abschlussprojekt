import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import { useParams } from "react-router-dom"
import ratingStar from "../assets/img/Star.png"
import * as MdIcons from "react-icons/md";
import { Link } from "react-router-dom"

function ProductDetails() {
    const params = useParams();
    const [arrayData, setArrayData] = useState([]);
    const [count, setCount] = useState(0);
    const stock = arrayData.stock;

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${params.id}`)
            .then((response) => response.json())
            .then((arrayData) => {
                setArrayData(arrayData)
                console.log(arrayData)
            })
    }, [params.id])
    return (
        <div className='productDetailsDiv'>
            <div className="headerbackstyle">
                <Link className="backbut" to={"/home"}><MdIcons.MdOutlineKeyboardArrowLeft /></Link>
                <h2>{arrayData.title}</h2>
            </div>
            <div className='detailsContainer'>
                <img className='mainPic' src={arrayData.thumbnail} alt={arrayData.title}></img>
                <div className='buttonContainer'>
                    <div className='oben'>
                        <p>{arrayData.title}</p>
                        <div className='anzahl'>
                            <button onClick={() => { setCount(count > 0 ? count - 1 : count) }}>-</button>
                            <p>{count}</p>
                            <button onClick={() => { setCount(count < stock ? count + 1 : count) }}>+</button>
                        </div>
                    </div>
                    <div className='starWithPrice'>
                        <img id='starStyle' src={ratingStar} alt="star"></img>
                        <p>{arrayData.rating}</p>
                    </div>
                    <div className='unten'>
                        <p id="stock">{stock} pieces in stock</p>
                        <p id="priceCard">${arrayData.price}</p>
                    </div>
                </div>
                <div id="descriptionStyle">
                    <h3>Description</h3>
                    <p>{arrayData.description}</p>
                </div>
                <button className="addToCart">Add to cart</button>
            </div>
            <Footer />
        </div>
    )

}

export default ProductDetails;