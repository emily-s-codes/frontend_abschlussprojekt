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
                <img src={Dress} alt="dress"></img>
                <p className="categoryP" >Category 1</p>
            </div>
            <div className="categoryContainer">
                <img src={Sofa} alt="sofa"></img>
                <p className="categoryP" >Category 2</p>
            </div>
            <div className="categoryContainer">
                <img src={Watch} alt="watch"></img>
                <p className="categoryP" >Category 3</p>
            </div>
            <div className="categoryContainer">
                <img src={Lotion} alt="lotion"></img>
                <p className="categoryP" >Category 4</p>
            </div>
            <div className="categoryContainer">
                <img src={Food} alt="food"></img>
                <p className="categoryP" >Category 5</p>
            </div>
        </div>
    )
}

export default Carousel;