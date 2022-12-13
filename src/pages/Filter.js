import React, { useEffect, useState } from 'react';
import * as CiIcons from "react-icons/ci";
import { Link } from "react-router-dom"

function Filter() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products/categories")
            .then(res => res.json())
            .then((categories) => {
                setCategories(categories)
                console.log(categories)
            })
    }, [])

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then((products) => {
                setProducts(products)
                console.log(products.products)
            })
    }, [])

    function handleClick() {

    }

    return (
        <div>
            <div className='filterNav'>
                <Link to={"/"}><CiIcons.CiCircleChevLeft /></Link>
                <h2>Filters</h2>
            </div>
            <div>
                <section className='categories'>
                    <h3>Categories</h3>
                    {categories?.map((category, index) => {
                        return (
                            <p key={index} onClick={handleClick}>{category}</p>
                        )
                    })}
                </section>
                <section className='price'>
                    <h3>Price</h3>
                    <article>
                        <p>0 - 20 €</p>
                        <p>20 - 50 €</p>
                        <p>50 - 100 €</p>
                        <p>über 100 €</p>
                    </article>
                </section>
                <section className='brands'>
                    <h3>Brands</h3>
                    {products?.products?.map((item, index) => {
                        return (
                            <p key={index}>{item.brand}</p>
                        )
                    })}
                </section>
            </div>
        </div>
    )
}

export default Filter