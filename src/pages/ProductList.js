import React, { useState, useEffect } from 'react'
import Filter from '../components/Filter';
import FilteredProductsList from '../components/FilteredProductsList'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';
import * as MdIcons from "react-icons/md"
// PARENT ELEMENT
function ProductList() {
    const [prod, setProd] = useState([]);
    const [cat, setCat] = useState([]);
    const [filt, setFilt] = useState([]);
    const [showFilt, setShowFilt] = useState(false);
    const [filtProd, setFiltData] = useState([]);


    useEffect(() => {
        fetch("https://dummyjson.com/products/categories")
            .then(res => res.json())
            .then((cat) => {
                setCat(cat)
            })
    }, [])


    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then((prod) => {
                setProd(prod.products)
            })
    }, [])


    if (!prod) {
        return <div>Loading products...</div>;
    }
    if (!cat) {
        return <div>Loading categories...</div>;
    }


    return (
        <div className='productListStyle'>
            <div className='headerbackstyle'>
                <Link className="backbut" to={"/home"}><MdIcons.MdOutlineKeyboardArrowLeft /></Link>
                <h2 className='filterHeadline'>Filters</h2>
            </div>
            <Navbar />
            <Filter products={prod} setprod={setProd} categories={cat} setcat={setCat} filter={filt} setFilter={setFilt} showFilter={showFilt} setShowFilter={setShowFilt} />
            <FilteredProductsList products={prod} setprod={setProd} categories={cat} setcat={setCat} filter={filt} setFilter={setFilt} showFilter={showFilt} setShowFilter={setShowFilt} filteredProducts={filtProd} setFilteredProducts={setFiltData} />
            <Footer />
        </div>
    )
}

export default ProductList