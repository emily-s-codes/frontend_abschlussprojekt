import React from 'react'
// import * as FaIcons from "react-icons/fa";
import * as CiIcons from "react-icons/ci";
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div id="footerIcons">
            <Link to={"/home"}><CiIcons.CiGrid42 /></Link>
            <CiIcons.CiSearch />
        </div>
    )
}

export default Footer