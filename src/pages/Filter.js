import React, { useEffect, useState } from 'react';
import * as CiIcons from "react-icons/ci";
import { Link } from "react-router-dom"

function Filter() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    let [selectedCategories, setSelectedCategories] = useState([]);
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
    // use react not dom
    const chosenCategories = document.getElementsByName("filterCategories");
    // onchange push selected category to selected or remove
    let selected = [];
    // const filterCategories = () => {

    //     let selectedCategories = categories?.filter(category => category === products.category);
    //     console.log(selectedCategories)
    //     setSelectedCategories(selectedCategories)
    // }

    console.log(selected)

    function clickHandler(e) {
        if (e.target.checked) {
            setSelectedCategories(prev => [...prev, e.target.name]);
        }
        console.log(e.target.checked)

    }
    console.log(selectedCategories)

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
                                <input onClick={clickHandler} type="checkbox" name={category} id={category} className="categoryCheckbox" />
                                <label htmlFor={category} className={buttonSelect ? "selected" : ""}>{category}</label>
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
            {/* onClick={filterCategories} */}
            <button className='filterButton' type='button' >Apply Filter</button>
        </div >
    )
}

export default Filter