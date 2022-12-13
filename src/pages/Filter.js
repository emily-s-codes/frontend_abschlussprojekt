import React, { useEffect, useState } from 'react';
import * as CiIcons from "react-icons/ci";
import { Link } from "react-router-dom"

function Filter() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [filtered, setFiltered] = useState([]);

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

    // select & deselect categories
    function clickHandlerCategory(e) {
        e.target.checked ?
            setSelectedCategories(prev => [...prev, e.target.name]) :
            setSelectedCategories(prev => [...prev.filter(item => item !== e.target.name)]);
    }
    console.log(selectedCategories) // array of categories, check adds, uncheck removes

    function clickHandlerPrice(e) {
        e.target.checked ?
            setSelectedPrice(prev => [...prev, e.target.id]) :
            setSelectedPrice(prev => [...prev.filter(item => item !== e.target.id)]);
    }
    console.log(selectedPrice) //  // array of prices, check adds, uncheck removes

    function clickHandlerBrand(e) {
        e.target.checked ?
            setSelectedBrands(prev => [...prev, e.target.name]) :
            setSelectedBrands(prev => [...prev.filter(item => item !== e.target.name)]);
    }
    console.log(selectedBrands) // array of brands, check adds, uncheck removes

    function clickHandlerAllFilters(props) {
        return (
            setFiltered(prev => [...prev, selectedCategories, selectedPrice, selectedBrands])
        )
    }
    console.log(typeof filtered)
    console.log(filtered)
    // console.log(filtered.filter(item => (item === products)))

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
                                <input onClick={clickHandlerCategory} type="checkbox" name={category} id={category} className="categoryCheckbox" />
                                <label htmlFor={category} className="categoryLabel" >{category} </label>
                            </section>
                        )
                    })}
                </section>
                <section className='price'>
                    <h3>Price</h3>
                    <article>
                        <input onClick={clickHandlerPrice} type="checkbox" name='price' id="price1" className='priceCheckbox' />
                        <label htmlFor="price1" className='priceLabel'>0 - 20 €</label>
                        <br />
                        <input onClick={clickHandlerPrice} type="checkbox" name='price' id="price2" className='priceCheckbox' />
                        <label htmlFor="price2" className='priceLabel'>20 - 50 €</label>
                        <br />
                        <input onClick={clickHandlerPrice} type="checkbox" name='price' id="price3" className='priceCheckbox' />
                        <label htmlFor="price3" className='priceLabel'>50 - 100 €</label>
                        <br />
                        <input onClick={clickHandlerPrice} type="checkbox" name='price' id="price4" className='priceCheckbox' />
                        <label htmlFor="price4" className='priceLabel'>über 100 €</label>
                    </article>
                </section>
                <section className='brands'>
                    <h3>Brands</h3>
                    {products?.map((item, index) => {
                        return (
                            <section key={index}>
                                <input onClick={clickHandlerBrand} type="checkbox" name={item.brand} id={item.brand} className="brandCheckbox" />
                                <label htmlFor={item.brand} className='brandLabel'>{item.brand}</label>
                            </section>
                        )
                    })}
                </section>
            </div>
            <button onClick={clickHandlerAllFilters} className='filterButton' type='button'>Apply Filter</button>
        </div >
    )
}

export default Filter;