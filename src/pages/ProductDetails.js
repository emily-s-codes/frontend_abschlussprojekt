import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import { useParams } from "react-router-dom"
import ratingStar from "../assets/img/Star.png"
import * as MdIcons from "react-icons/md";
import { Link } from "react-router-dom"

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
        <div className='productDetailsDiv'>
            <Link to={"/home"}><MdIcons.MdOutlineKeyboardArrowLeft /></Link>
            <h2>{arrayData.title}</h2>
            <div className='detailsContainer'>
                <img src={arrayData.thumbnail} alt={arrayData.title}></img>
                <div className='buttonContainer'>
                    <p>{arrayData.title}</p>
                    <div className='counterDiv'>
                        <button>-</button>
                        <p>0</p>
                        <button>+</button>
                    </div>
                </div>
                <div className='ratingBox'>
                    <img id='starStyle' src={ratingStar} alt="star"></img>
                    <p>{arrayData.rating}</p>
                </div>
                <h3>Description:</h3>
                <p>{arrayData.description}</p>
                <button>Add to cart</button>
            </div>
            <Footer />
        </div>
    )

}

export default ProductDetails;