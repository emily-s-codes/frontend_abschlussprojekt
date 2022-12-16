// import React, { useEffect, useState } from 'react'
import filterButton from "../assets/img/Vector.svg"
import SearchBar from "./Searchbar";
import * as MdIcons from "react-icons/md";
import { Link } from "react-router-dom";


function Navbar() {
    // const [usableData, setUsableData] = useState([]);

    // useEffect(() => {
    //     if (arrayData === undefined) {
    //         return
    //     } else if (props.searchTerm) {

    //     } else { }
    // })



    return (
        <div className="navBarBox">
            <SearchBar placeholder="Enter product name" />
            <Link to={"/productlist"}> <button className='navbarButton'><img alt="" src={filterButton}></img></button></Link>
            <Link to={"/shoppingcart"}> <button className="shoppingCartButton">{<MdIcons.MdShoppingCart />}</button></Link>
        </div>

    )
}

export default Navbar