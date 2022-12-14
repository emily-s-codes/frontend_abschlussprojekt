import React, { useState } from 'react';
import { Link } from "react-router-dom"

function Filter(props) {
    const [filter, setFilter] = useState([]);
    const [seeFilter, setSeeFilter] = useState(false);
    // setting console log (filter) within the functions below, after the ternary operator, results in faulty logging. setState is asynchronous. viewing the entire array in console.log with the button click at the end seems to work well 
    function clickHandlerCategory(e) {
        e.target.checked ?
            setFilter(prev => [...prev, e.target.name]) :
            setFilter(prev => [...prev.filter(item => item !== e.target.name)]);
    }

    function clickHandlerPrice(e) {
        e.target.checked ?
            setFilter(prev => [...prev, e.target.id]) :
            setFilter(prev => [...prev.filter(item => item !== e.target.id)]);
    }

    function clickHandlerBrand(e) {
        e.target.checked ?
            setFilter(prev => [...prev, e.target.name]) :
            setFilter(prev => [...prev.filter(item => item !== e.target.name)]);
    }

    function clickToSelection() {
        console.log(filter);
        console.log("Well done");
        setSeeFilter(!seeFilter)
    }

    return (
        <div className='filterComponent'>
            <h3>Categories</h3>
            <div className='navbar'>
                <section className='categories'>
                    {props?.categories?.map((category, index) => {
                        return (
                            <section key={index}>
                                <input onClick={clickHandlerCategory} type="checkbox" name={category} id={category} className="categoryCheckbox" />
                                <label htmlFor={category} className="categoryLabel" >{category} </label>
                            </section>
                        )
                    })}
                </section>
                <h3>Price</h3>
                <section className='price'>
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
                </section>
                <h3>Brands</h3>
                <section className='brands'>
                    {props?.products?.map((item, index) => {
                        return (
                            <section key={index}>
                                <input onClick={clickHandlerBrand} type="checkbox" name={item.brand} id={item.brand} className="brandCheckbox" />
                                <label htmlFor={item.brand} className='brandLabel'>{item.brand}</label>
                            </section>
                        )
                    })}
                </section>
            </div>
            <Link to={"/productlist"}>
                <button onClick={clickToSelection} className='filterButton' type='button'>Apply Filter</button>
            </Link>
        </div>
    )
}

export default Filter;