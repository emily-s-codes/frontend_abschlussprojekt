import './SplashScreen.css';
import React, { useRef } from "react";
// installation of "React-Spring" library necessary - npm install react-spring
// useSpring Hooks must be importet, with the animated component in combination
import { useChain, useSpring, animated } from 'react-spring';
// import { Link } from "react-router-dom"




function SplashScreen() {
    // Reference points in the JSX
    const main0Ref = useRef();
    const main1Ref = useRef();
    const main2Ref = useRef();
    const main3Ref = useRef();

    // pulled parts that need to be animated, pulled via the reference points from the JSX
    const main0Style = useAnimation(main0Ref.current);
    const main1Style = useAnimation(main1Ref.current);
    const main2Style = useAnimation(main2Ref.current);
    const main3Style = useAnimation(main3Ref.current);

    useChain([main0Ref, main1Ref, main2Ref, main3Ref])

    // This is the visible part of the animation
    return (
        <animated.div ref={main0Ref} style={main0Style} className="App-hidden">
            <div className='column'>
                <animated.img id="splashIcon" ref={main1Ref} style={main1Style} alt="" src="./img/E-Shop_Icon.svg"></animated.img><br />
                <animated.img className='splashVector' ref={main2Ref} style={main2Style} alt="" src="./img/E-Shop_Vector.svg"></animated.img>
                <animated.p className='splashText' ref={main3Ref} style={main3Style}>Your Shopping Solution</animated.p>
            </div>
        </animated.div>
    );
};

// here are the keyframes of the animation defined
const useAnimation = (ref) => {

    const spring = useSpring({
        from: {
            opacity: 0,
            display: "flex",
            "flex-direction": "column",
            "text-align": "center",
            "justify-content": "center",
            margin: "0 auto"
        },
        // you can add as many Keyframes with the "to:" part as you need, in this case "opacity: 1" is held for a while. Otherwise the animation would run to fast
        to: [
            {
                opacity: 0.99
            },
            {
                opacity: 1
            },
            {
                opacity: 1
            },
            {
                opacity: 1
            },
            {
                opacity: 1
            },
            {
                opacity: 0.99
            },
            {
                opacity: 0
            },
            {
                opacity: 0,
                display: "none"
                // SplashScreen must be dissolved with display none, otherwise you can't interact with the page below
            }
        ],
    });
    return spring;
};

export default SplashScreen;
