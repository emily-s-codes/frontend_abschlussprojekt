import React, { useEffect, useState } from 'react';
import * as CiIcons from "react-icons/ci";
import { Link } from "react-router-dom"

function Filter() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState(!categories);
    const [buttonSelect, setButtonSelect] = useState(false);

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
                setProducts(products.products)
                console.log(products)
            })
    }, [])

    if (!products) {
        return <div>Loading products...</div>;
    }
    if (!categories) {
        return <div>Loading categories...</div>;
    }

    const chosenCategories = document.getElementsByName("filterCategories");

    let selected = [];
    const filterCategories = () => {
        selected = chosenCategories.checked;
        const filteredCategories = products?.filter(singleItem => singleItem.title.toLowerCase().includes(selected));
        setSelectedCategories(filteredCategories)
    }

    console.log(selected)

    function clickHandler(e) {
        setButtonSelect(!buttonSelect);
    }

    return (
        <div>
            <div className='filterNav'>
                <Link to={"/"}><CiIcons.CiCircleChevLeft /></Link>
                <h2 className='filterHeadline'>Filters</h2>
            </div>
            <div>
                <section className='categories'>
                    <h3>Categories</h3>
                    {categories?.map((category, index) => {
                        return (
                            <section key={index}>
                                <input type="checkbox" name="filterCategories" id={category} className="categoryCheckbox" />
                                <label onClick={clickHandler} htmlFor={category} className={buttonSelect ? "" : "selected"}>{category}</label>
                            </section>
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
            <button className='filterButton' type='button' onClick={filterCategories}>Apply Filter</button>
        </div >
    )
}

export default Filter