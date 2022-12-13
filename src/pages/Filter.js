import React, { useEffect, useState } from 'react';
import * as CiIcons from "react-icons/ci";
import { Link } from "react-router-dom"

function Filter() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [arrayData, setArrayData] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState(arrayData);
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
                setProducts(products)
                console.log(products.products)
            })
    }, [])

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((arrayData) => {
                setArrayData(arrayData.products)
                console.log(arrayData)
            })
    }, [])

    const [subset, setSubset] = useState(arrayData);

    if (!arrayData) {
        return;
    }

    const chosenCategories = document.getElementsByName("filterCategories");

    chosenCategories.forEach(category => {
        console.log(category.id)
    })

    let selected = [];
    const filterCategories = () => {
        selected = chosenCategories.checked;
        const filteredCategories = arrayData.filter(singleItem => singleItem.title.toLowerCase().includes(selected));
        setSelectedCategories(filteredCategories)
    }
    if (subset) {
        console.log(subset);
    }

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
                    {chosenCategories.forEach(category => {
                        console.log(category.id)
                    })}
                    {arrayData?.map(singleItem => {
                        return (
                            <section key={singleItem.id}>
                                <input type="checkbox" name="filterCategories" id={singleItem.title} className="categoryCheckbox" />
                                <label onClick={clickHandler} htmlFor={singleItem.title} className={buttonSelect ? "" : "selected"}>{singleItem.category}</label>
                                {/* <label onClick={() => setButtonSelect(!buttonSelect)} className={buttonSelect ? "" : "selected"} htmlFor={singleItem.title}>{singleItem.category}</label> */}
                            </section>
                        )
                    })}
                    {categories?.map((category, index) => {
                        return (
                            <p key={index} onClick={clickHandler}>{category}</p>
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
            <button className='filterButton' type='button'>Apply Filter</button>
        </div >
    )
}

export default Filter