import React, { useState } from 'react'
import Icon from "../assets/img/E-Shop_Icon.svg"
import ShopVector from "../assets/img/E-Shop_Vector.svg"
import { Navigate } from "react-router-dom";


function SplashScreen() {
    const [goToOnboarding, setGoToOnboarding] = useState(false);

    setTimeout(function () {
        setGoToOnboarding(true);
    }, 3000)

    if (goToOnboarding === false) {
        return (
            <div>
                <img alt="Icon" src={Icon}></img><br />
                <img alt="Shop Icon" src={ShopVector}></img>
                <p>Your Shopping Solution</p>
            </div>
        )
    } else {
        return <Navigate to="/onboarding" />
    }
}

export default SplashScreen