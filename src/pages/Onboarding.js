import { Link } from "react-router-dom"
import React from 'react'
import SplashScreen from '../components/SplashScreen/withSplashScreen'
import './Onboarding.css'
import Illustration from "../assets/img/Illustration.png"


function Onboarding() {
    return (
        <div>
            <SplashScreen />
            <div style={{ width: '100%', height: '100%', marginTop: "7vh" }}>
                <img style={{ width: "100%", marginBottom: "7vh" }} className='shopCartoon' alt="shop cartoon" src={Illustration}></img>
                <div className='landingPageTextBlock' style={{ width: "80%", marginLeft: "10%" }}>
                    <h2 className='landingPageHeadline' style={{ marginBottom: "3vh", textAlign: "center" }}>Biggest Sales at your Fingertips</h2>
                    <p className='landingPageText' style={{ textAlign: "center", marginLeft: "2.5%", width: "95%", fontSize: "1.2em" }}>Find your best products from popular shops without delay</p>
                    <Link to={"/home"}><button className='getStartedButton' style={{ marginTop: "10vh", marginLeft: "23%", width: "167px", height: "36px", borderRadius: "9px", backgroundColor: "#364FD4", color: "#fff", fontSize: "16px", }}>Get Started</button></Link>
                </div>
            </div >
        </div >
    )
}

export default Onboarding