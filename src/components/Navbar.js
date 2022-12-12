import React, { useEffect, useState } from 'react'
import HomePage from '../pages/HomePage';
import filterButton from "../assets/img/Vector.svg"
import * as CiIcons from "react-icons/ci";


function Navbar(props) {
    const [usableData, setUsableData] = useState([]);

    // useEffect(() => {
    //     if (arrayData === undefined) {
    //         return
    //     } else if (props.searchTerm) {

    //     } else { }
    // })



    return (
        <div>
            <CiIcons.CiSearch />
            <input type="text" placeholder='Search'></input>
            <button className='navbarButton'><img src={filterButton}></img></button>
        </div>
    )
}

export default Navbar