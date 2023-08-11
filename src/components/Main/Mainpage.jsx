import React from 'react'
import Header from '../Header/Header-Main'
import { FaDumbbell, FaHome, FaAppleAlt, FaSignOutAlt } from 'react-icons/fa';
import { TbYoga } from 'react-icons/tb'
import { Link } from 'react-router-dom';
import { main_css } from '../../Module/Content';
import { signout } from '../../Module/function';
import Homepage from '../Homepage/Homepage';
import Yoga from '../Yoga/Yoga'
import Gym from "../Gym/Gym"
import Fitness from "../Fitness/Fitness"
import './Mainpage.css'
export default function Mainpage() {
    const [content, set_content] = React.useState(<Homepage />)
    const change_ = (value) => {
        set_content(value);
    };
    function change(component) {
        if (component === "Home") {
            set_content(<Homepage />)
        }
        else if (component === "Gym") {
            set_content(<Gym onValueChange={change_} />)
        }
        if (component === "Fitness") {
            set_content(<Fitness />)
        }
        if (component === "Yoga") {
            set_content(<Yoga onValueChange={change_} />)
        }
    }

    return (
        <>
            <Header />
            <div id="Main_div" style={main_css}>
                <div className="Main" data-div="web_div" id="Main-1">
                    <p data-text="web_text" onClick={() => { change("Home") }} className="nav_text">Home</p>
                    <p data-text="web_text" onClick={() => { change("Gym") }} className="nav_text">Gym Beast</p>
                    <p data-text="web_text" onClick={() => { change("Yoga") }} className="nav_text">ZenFlow Yoga</p>
                    <p data-text="web_text" onClick={() => { change("Fitness") }} className="nav_text">Daily Fit+</p>
                    <div id="signout">

                        <p data-text="web_text" className="nav_text" onClick={signout}>Sign Out</p>
                    </div>
                </div>
                <div className="Main" data-div="web_div" id="Main-2">
                    <div id="icons_div" data-div="web_div">
                        <p data-text="web_text" className='Nav_icon' onClick={() => { change("Home") }} >
                            <FaHome />
                        </p >
                        <p data-text="web_text" className='Nav_icon' onClick={() => { change("Gym") }}>
                            <FaDumbbell />
                        </p >
                        <p data-text="web_text" className='Nav_icon' onClick={() => { change("Fitness") }} >
                            <FaAppleAlt />
                        </p >
                        <p data-text="web_text" className='Nav_icon' onClick={() => { change("Yoga") }}>
                            <TbYoga style={{ fontWeight: "900" }} />
                        </p >
                    </div>
                    <div data-text="web_text" id="content">
                        {content}
                    </div>
                    <div id="out" data-div="web_div">
                        <p data-text="web_text" className='out_icon' id="">
                            <Link to="/" data-text="web_text">
                                <FaSignOutAlt />
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
