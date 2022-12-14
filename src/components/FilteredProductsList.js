import React, { useEffect } from 'react';
import ratingStar from "../assets/img/Star.png"
// import SingleProduct from './SingleProduct';

function FilteredProductsList(props) {
    const products = props.products;
    const filter = props.filter;
    const filteredProducts = props.filteredProducts;
    const setFilteredProducts = props.setFilteredProducts;

    console.log(filter)

    // * to fix: each useEffect works for one render. every click on a new option kills the page.

    // return by brand
    useEffect(() => {
        if (!products) {
            return console.log("products not loaded");
        }
        for (let i = 0; i < filter.length; i++) {
            return (products?.map(product => {
                if (product.brand.toLowerCase() !== filter[i].toLowerCase()) {
                    return console.log("no match")
                }
                if (product.brand.toLowerCase() === filter[i].toLowerCase()) {
                    return (setFilteredProducts(prev => [...prev, product]))
                }
                return filteredProducts;
            }))
        }
        return setFilteredProducts(filteredProducts)
        // eslint-disable-next-line
    }, [filter, products])

    // return by category
    useEffect(() => {
        if (!products) {
            return console.log("products not loaded");
        }
        for (let i = 0; i < filter.length; i++) {
            return (products?.map(product => {
                if (product.category.toLowerCase() !== filter[i].toLowerCase()) {
                    return console.log("no match")
                }
                if (product.category.toLowerCase() === filter[i].toLowerCase()) {
                    return (setFilteredProducts(prev => [...prev, product]))
                }
                return filteredProducts;
            }))
        }
        return setFilteredProducts(filteredProducts)
        // eslint-disable-next-line
    }, [filter, products])

    // return by price
    useEffect(() => {
        if (!products) {
            return console.log("products not loaded");
        }
        for (let i = 0; i < filter.length; i++) {
            return (products?.map(product => {
                if (filter[i] === "0 - 20 €" && product.price < 20) {
                    return (setFilteredProducts(prev => [...prev, product]))
                }
                if (filter[i] === "20 - 50 €" && (product.price > 20 && product.price < 50)) {
                    return (setFilteredProducts(prev => [...prev, product]))
                }
                if (filter[i] === "50 - 100 €" && (product.price > 50 && product.price < 100)) {
                    return (setFilteredProducts(prev => [...prev, product]))
                }
                if (filter[i] === "100 €+" && product.price > 100) {
                    return (setFilteredProducts(prev => [...prev, product]))
                }
                return filteredProducts;
            }))
        }
        return setFilteredProducts(filteredProducts)
        // eslint-disable-next-line
    }, [filter, products])

    // return a map of all single product components that contain any text in title, category, or price matching the array "filter" 
    //setuseAbleData(allPokemon.results.filter(el => el.name.slice(0, length).toLowerCase() === (props.searchTerm).toLowerCase().replaceAll(" ", "-")));
    //, [props.searchTerm]);

    console.log(filteredProducts)
    return (

        < div className={props.showFilter ? `` : `filterComponentHide`}>
            {filteredProducts.map(product => {
                return (
                    <div id='cardStyle' key={product.id}>
                        <img id='imgStyle' src={product.thumbnail} alt={product.title}></img>
                        <div className='ratingDiv'>
                            <img id='starStyle' src={ratingStar} alt="star"></img>
                            <p id='ratingStyle'>{product.rating}</p>
                        </div>
                        <p id='titleStyle'>{product.title}</p>
                        <p id='priceStyle'>${product.price}</p>
                    </div>
                )
            })}
        </div >
    )
}

export default FilteredProductsList