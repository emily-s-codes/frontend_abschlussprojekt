import React from 'react'
import filterButton from "../assets/img/Vector.svg"
import SearchBar from "./Searchbar";
import { Link } from "react-router-dom";
import * as CiIcons from "react-icons/ci";


function Navbar(props) {
    return (
        <div className="navBarBox">
            <SearchBar placeholder="Enter product name" />
            <Link to={"/productlist"}> <button className='navbarButton'><img alt="" src={filterButton}></img></button></Link>
            <div className='shoppingCartDiv'>
                <button className='shoppingCart'>{<CiIcons.CiShoppingCart />}</button>
            </div>
            <div className='signInDiv'>
                <button className='signIn'>{<CiIcons.CiUser />}</button>
            </div>
        </div>
    )
}

export default Navbar;