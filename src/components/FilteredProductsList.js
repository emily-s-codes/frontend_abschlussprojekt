import React, { useEffect } from 'react';
import ratingStar from "../assets/img/Star.png"
// import SingleProduct from './SingleProduct';
import { Link } from "react-router-dom"

function FilteredProductsList(props) {
    const products = props.products;
    const filter = props.filter;
    const filteredProducts = props.filteredProducts;
    const setFilteredProducts = props.setFilteredProducts;
    const filteredProductsArray = [];

    // return by brand
    useEffect(() => {
        if (!products) {
            return console.log("products not loaded");
        }
        for (let i = 0; i < filter.length; i++) {
            (products?.forEach(product => {
                if (product.brand.toLowerCase() !== filter[i].toLowerCase()) {
                    return;
                }
                if (product.brand.toLowerCase() === filter[i].toLowerCase()) {
                    filteredProductsArray.push(product)
                }
            }))
        }
        setFilteredProducts(filteredProducts)
        // eslint-disable-next-line
    }, [filter, products])

    // // return by category
    useEffect(() => {
        if (!products) {
            return console.log("products not loaded");
        }
        for (let i = 0; i < filter.length; i++) {
            (products?.forEach(product => {
                if (product.category.toLowerCase() !== filter[i].toLowerCase()) {
                    return;
                }
                if (product.category.toLowerCase() === filter[i].toLowerCase()) {
                    filteredProductsArray.push(product)
                }
            }))
        }
        setFilteredProducts(filteredProductsArray)
        // eslint-disable-next-line
    }, [filter, products])

    // return by price
    useEffect(() => {
        if (!products) {
            return;
        }
        for (let i = 0; i < filter.length; i++) {
            (products?.forEach(product => {
                if (filter[i] === "0 - 20 €" && product.price < 20) {
                    filteredProductsArray.push(product)
                }
                if (filter[i] === "20 - 50 €" && (product.price >= 20 && product.price < 50)) {
                    filteredProductsArray.push(product)
                }
                if (filter[i] === "50 - 100 €" && (product.price >= 50 && product.price < 100)) {
                    filteredProductsArray.push(product)
                }
                if (filter[i] === "100 €+" && product.price >= 100) {
                    filteredProductsArray.push(product)
                }
            }))
        }
        setFilteredProducts(filteredProductsArray)
        // eslint-disable-next-line
    }, [filter, products]) //

    // filteredProducts= all single product components that contain any text in title, category, or price matching the array "filter" 
    // uniqueProducts removes duplicates from filteredProducts i.e. products that matched to more than one criterion and therefore appeared twice in filteredProducts


    // const [sort, setSort] = useState(uniqueProducts)

    function sortLowHigh() {
        const productsLowHigh = [...filteredProducts]
        productsLowHigh.sort((a, b) => a.price - b.price)
        setFilteredProducts(productsLowHigh);
    }

    function sortHighLow() {
        const productsHighLow = [...filteredProducts]
        productsHighLow.sort((a, b) => b.price - a.price)
        setFilteredProducts(productsHighLow);
    }

    const uniqueProducts = [...new Set(filteredProducts)]
    return (
        < div className={props.showFilter ? `SProductDiv` : `SProductDiv filterComponentHide`}>
            <div className='sortDiv'>
                <p>Sort by:</p>
                <p onClick={sortLowHigh}>Lowest Price</p>
                <p onClick={sortHighLow}>Highest Price</p>
            </div>

            {uniqueProducts?.map(product => {
                return (
                    <Link to={`/product/${product.id}`}>
                        <div id='cardStyle' key={product.id}>
                            <img id='imgStyle' src={product.thumbnail} alt={product.title}></img>
                            <div className='ratingDiv'>
                                <img id='starStyle' src={ratingStar} alt="star"></img>
                                <p id='ratingStyle'>{product.rating}</p>
                            </div>
                            <p id='titleStyle'>{product.title}</p>
                            <p id='priceStyle'>${product.price}</p>
                        </div>
                    </Link>
                )
            })}
        </div >
    )
}

export default FilteredProductsList