import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import { text_ } from '../../Module/function'

import { home, service_list as service, contact } from '../../Module/Content'
export default function Home({ onValueChange }) {
    React.useEffect(() => {
        const banner_text = setInterval(() => { text_("#type") }, 100);
        return () => {
            clearInterval(banner_text);
        };
    }, []);
    return (
        <>
            <Header onValueChange={onValueChange} />
            <div id="Home">

            </div>
            <div id="Home_div">
                <div id="Home_main-1">
                    <h1 id="headline">
                        {home.head}
                    </h1>
                    <div id="Home_main-2">
                        <Link to="/SignUp">
                            <div className="Homebtn">
                                Start your Journey
                            </div>
                        </Link>
                        <Link to="/Main">
                            <div className="Homebtn">
                                Try for Free
                            </div>
                        </Link>
                    </div>
                    <div id="Home_main-3">
                        <p id="type"></p>
                    </div>
                </div>
            </div>
            <div className="sub_div" id="about_div">
                <div id="about">
                    <h2 className="sub_head" id="about_head">About Us</h2>
                    <p className="sub_content" id="about_content">
                        {home.aboutus}
                    </p>
                </div>
            </div>
            <div className="sub_div" id="service_div">
                <div id="service">
                    <h2 className="sub_head" id="service_head">Services offered by Us</h2>
                    <p className="sub_content" id="service_content">
                        <div className="sub_innercontent" id="about_innercontent">
                            {home.service}
                            <br /> <br />
                            {service._1}
                            <br /> <br />
                            {service._2}
                            <br /><br />
                            {service._3}
                            <br /> <br />
                            {service._4}
                            <br /> <br />
                            {service._5}
                            <br /> <br />
                        </div>
                    </p>
                </div>
            </div>
            <div className="sub_div" id="contact_div" data-div="web_div">
                <div id="contact">
                    <p className="sub_content" data-text="web_text" id="contact_content">
                        {home.footer}
                    </p>
                    <div className="sub_innercontent" id="contact_innercontent">
                        <div id="footer_contact" data-text="web_text">
                            <br />
                            {contact.phone}
                            <br />
                            {contact.email}
                            <br />
                            {contact.address}
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
