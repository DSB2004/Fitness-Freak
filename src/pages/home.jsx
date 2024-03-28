import React from 'react';
import "../style/home.css"
import { header, hero, about, footer } from '../assets/static/home';
import Header from '../components/common/header';
import Hero from '../components/home/hero';
import About from '../components/home/about';
import Footer from '../components/home/footer';
import { useSelector } from 'react-redux';
const Home = () => {
    const darkTheme = useSelector(state => state.Theme)
    return (
        <>
            <main className={`${darkTheme ? "dark-bg" : "light-bg"} trans-500`}>
                <Header content={header} />
                <Hero content={hero} />
                <About content={about} />
                <Footer content={footer} />
            </main >
        </>
    )
};

export default Home;