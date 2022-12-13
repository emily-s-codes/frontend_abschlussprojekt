// import React, { useEffect, useState } from 'react'
import filterButton from "../assets/img/Vector.svg"
import SearchBar from "./Searchbar";


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
            <button className='navbarButton'><img alt="" src={filterButton}></img></button>
        </div>
    )
}

export default Navbar