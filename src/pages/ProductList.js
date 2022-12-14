import React, { useState, useEffect } from 'react'
import Filter from '../components/Filter';
import FilteredProductsList from '../components/FilteredProductsList'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
// PARENT ELEMENT
function ProductList(props) {
    const [prod, setProd] = useState([]);
    const [cat, setCat] = useState([]);

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
        <div>
            <Navbar />
            <Filter products={prod} setprod={setProd} categories={cat} setcat={setCat} />
            <FilteredProductsList products={prod} />
            <Footer />
        </div>
    )
}

export default ProductList