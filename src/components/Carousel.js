import React from "react";
import Food from "../assets/img/food.png"
import Sofa from "../assets/img/sofa 1.png"
import Dress from "../assets/img/dress 1.png"
import Watch from "../assets/img/smartwatch 1.png"
import Lotion from "../assets/img/Lotion.png"
import "./Carousel.css"

function Carousel() {

    return (
        <div className="categoryCarousel">
            <div className="categoryContainer">
                <img src={Dress}></img>
            </div>
            <div className="categoryContainer">
                <img src={Sofa}></img>
            </div>
            <div className="categoryContainer">
                <img src={Watch}></img>
            </div>
            <div className="categoryContainer">
                <img src={Lotion}></img>
            </div>
            <div className="categoryContainer">
                <img src={Food}></img>
            </div>
        </div>
    )
}

export default Carousel;