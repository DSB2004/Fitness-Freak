import React from "react"
import { useSelector } from "react-redux";

const Hero = ({ content }) => {
    const darkTheme = useSelector(state => state.Theme)
    return (
        <section id="home" className={`m-auto home-section trans-500 outer-section `}>
            <h1 className={`heading  m-10-0 trans-500 s-color`}>{content.heading}</h1>
            <h1 className={`hero-section-welcome m-10-0 trans-500  ${darkTheme ? "dark-text" : "light-text"} `}>{content.welcome}</h1>
            <p className={`para trans-500  ${darkTheme ? "dark-text" : "light-text"} `}>{content.welcomepara}</p>

        </section >
    )
}

export default Hero;