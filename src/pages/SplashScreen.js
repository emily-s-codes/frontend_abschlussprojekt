import React from 'react'
import Icon from "../assets/img/E-Shop_Icon.svg"
import ShopVector from "../assets/img/E-Shop_Vector.svg"
import { Link } from "react-router-dom";


function SplashScreen() {
    {
        return (
            <Link to={"/onboarding"}>
                <div>
                    <img alt="" src={Icon}></img><br />
                    <img alt="" src={ShopVector}></img>
                    <p>Your Shopping Solution</p>
                    <p>Click on the Screen to proceed to the Onboarding page🥳</p>
                </div>
            </Link>
        )
    }
}

export default SplashScreen