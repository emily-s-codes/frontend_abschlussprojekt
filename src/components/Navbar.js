import React from 'react'
import filterButton from "../assets/img/Vector.svg"
import SearchBar from "./Searchbar";
import { Link } from "react-router-dom";
import * as CiIcons from "react-icons/ci";


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
            <button className='shoppingCart'><img alt="shopping cart icon"></img></button>
        </div>
    )
}

export default Navbar