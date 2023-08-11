import React from 'react';
import logo from '../../Media/logo.jpeg';
import { account_, theme } from '../../Module/function';
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { FaSun } from 'react-icons/fa';
import './Header.css';
export default function Header() {
    const [account, set_account] = React.useState(account_())
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
    React.useEffect(() => {
        theme_set()
    }, [])
    return (
        <>
            <div id="header" data-div="web_div">
                <img src={logo} alt="" id="logo" />
                <h2 id="head" data-text="web_text">Fitness Freak</h2>
                <div id="user_div">

                    {account}
                </div>
                <div id="theme_div" onClick={theme_set}>{theme_}</div>
            </div>

        </>
    );
}
