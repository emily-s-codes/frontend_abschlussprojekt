import React from 'react'
import Illustration from "../assets/img/Illustration.png"
import { Link } from "react-router-dom"

function Onboarding() {

    return (
        <div>
            <img alt="shop cartoon" src={Illustration}></img>
            <div>
                <h2>Biggest Sell at your Fingertips</h2>
                <p>Find your best products from popular shops without delay</p>
                <Link to={"/home"}><button className='getStartedButton'>Get Started</button></Link>
            </div>
        </div>
    )
}

export default Onboarding