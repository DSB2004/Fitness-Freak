import React from 'react';
import { FaBars, FaInfo, FaHome, FaBlog, FaPhone } from 'react-icons/fa';
import { RiServiceFill } from "react-icons/ri"
import { theme, scrollto, icon_change, open, close } from '../../Module/function';
import logo from '../../Media/logo.jpeg';
import './Header.css';
export default function Header() {
    const [theme_, set_theme] = React.useState('')
    function theme_set() {
        set_theme(theme())
    }
    React.useEffect(() => {
        set_theme(icon_change())
    }, [])
    return (
        <>
            <div id="header" data-div="web_div">
                <img src={logo} alt="" id="logo" />
                <h2 id="head" data-text="web_text">Fitness Freak</h2>
                <div id="nav_div">
                    <div data-text="web_text" className="main_nav" onClick={() => { scrollto(0) }}>Home</div>
                    <div data-text="web_text" className="main_nav" onClick={() => { scrollto(500) }}>About Us</div>
                    <div data-text="web_text" className="main_nav" onClick={() => { scrollto(1000) }}>Services</div>
                    <div data-text="web_text" className="main_nav" onClick={() => { scrollto(2000) }}>Contact Us</div>
                    {/* <button onClick={theme}>Change</button> */}

                    <FaBars data-text="web_text" className="menu" id="menu-2" onClick={open} />
                    <div id="theme_div" onClick={theme_set}>{theme_}</div>
                </div>
            </div>
            <div id="dropmenu"  >
                <div id="innerdrop" data-div="web_div">
                    <div id="border" data-div="web_div">
                        <div className="nav" id="nav-1">
                            <FaHome data-text="web_text" onClick={() => { scrollto(0) }} />
                        </div>

                        <div className="nav" id="nav-2">
                            <FaInfo data-text="web_text" onClick={() => { scrollto(650) }} />
                        </div>

                        <div className="nav" id="nav-3">
                            <RiServiceFill data-text="web_text" onClick={() => { scrollto(1350) }} />
                        </div>
                        <div className="nav" id="nav-4">
                            <FaPhone data-text="web_text" onClick={() => { scrollto(3000) }} />
                        </div>
                        <div className="nav" id="nav-5">
                            <FaBlog data-text="web_text" />
                        </div>
                        <FaBars data-text="web_text" className="menu" id="menu-1" onClick={close} />
                    </div>
                </div>
            </div>
        </>
    );
}
