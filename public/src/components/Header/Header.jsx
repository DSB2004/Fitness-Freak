import React from 'react';
import { FaBars, FaInfo, FaHome, FaBlog, FaPhone, FaSun, FaMoon } from 'react-icons/fa';
import { RiServiceFill } from "react-icons/ri"
// import { IoIosMoon } from 'react-icons/io'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { theme, scrollto } from '../../Module/function';
import logo from '../../Media/logo.jpeg';
import './Header.css';
export default function Header() {
    const [open, set_open] = React.useState(false);
    const [theme_, set_theme] = React.useState('')
    function theme_set() {
        console.log(localStorage.getItem("FF_theme"))
        if (localStorage.getItem("FF_theme") === "light") {
            set_theme(<BsFillMoonStarsFill id="moon" className='theme_icon' />)
            theme()
        }
        else if (localStorage.getItem("FF_theme") === "dark") {
            set_theme(<FaSun id="sun" className='theme_icon' />)
            theme()
        }
        else {
            set_theme(<FaSun id="sun" className='theme_icon' />)
            localStorage.setItem("FF_theme", "light")
        }

    }
    function oper_menu() {
        const ham_menu = document.querySelector("#innerdrop");
        console.log("Working", open);
        if (open === false) {
            console.log(ham_menu);
            ham_menu.style.display = "flex";
            setTimeout(() => {
                ham_menu.style.height = "60px";
                ham_menu.style.opacity = "1";
            }, 100)
            set_open(true);
        } else if (open === true) {
            ham_menu.style.height = "0px";
            ham_menu.style.opacity = "0";
            setTimeout(() => {
                ham_menu.style.display = "none";
            }, 500);
            set_open(false);
        }
    }

    React.useEffect(() => {
        theme_set()
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

                    <FaBars data-text="web_text" className="menu" id="menu-2" onClick={oper_menu} />
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
                        <FaBars data-text="web_text" className="menu" id="menu-1" onClick={oper_menu} />
                    </div>
                </div>
            </div>
        </>
    );
}
