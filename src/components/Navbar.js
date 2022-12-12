import React, { useEffect, useState } from 'react'
import HomePage from '../pages/HomePage';
import filterButton from "../assets/img/Vector.svg"
import * as FaIcons from "react-icons/fa";


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
            <input type="text" placeholder={<img src={FaIcons.FaSearch} />}></input>
            <button><img src={filterButton}></img></button>
        </div>
    )
}

export default Navbar