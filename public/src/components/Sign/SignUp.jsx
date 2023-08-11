import React from 'react'
import Banner from '../Banner/Banner'
import "./sign.css"
import google from '../../Media/Google Logo.png'
import { Link } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa'
import { ImSpinner2 } from "react-icons/im"
import axios from 'axios'
export default function SignIn() {
    const [msg, set_msg] = React.useState('')
    const [Name, set_name] = React.useState('')
    const [Email, set_email] = React.useState('')
    const [url, set_url] = React.useState(window.location)
    const [option, set_option] = React.useState(
        <>
            <div id="other_option">
                <p data-text="web_text" id="option_head">More options</p>
                <div className='other_div' id="google">
                    <img id="google_logo" src={google} alt="" />
                    SignUp with Google</div>
            </div>
            <Link data-text="web_text" to="/SignIn" id="alert_bar">Already have an account  ??</Link>
        </>

    )
    const [Password, set_password] = React.useState('')
    function url_() {
        console.log(url.href)
    }
    const submit = async (e) => {
        set_msg(<ImSpinner2 id="loading" />);
        e.preventDefault();
        const user_data = { Name, Email, Password };
        // console.log(Email)
        if (Email === '') {
            set_msg("Email can't be negative");
            return;
        }

        console.log(user_data);
        // const url = "http://localhost/Signup";/

        try {
            // await axios.post(url, user_data);
            // const response = await axios.get(url);
            const response = await axios.post(url, user_data);
            console.log(typeof response.data);
            console.log(response.data);

            if (response.data[0] === "all ok") {
                set_option(
                    <>
                        <input data-div="web_div" id="OTP" data-text="web_text" className="SignInput" type="text" placeholder='Enter the OTP' />
                        <div data-text="web_text" data-div="web_div" id="submit_btn" onClick={submit_otp}>
                            Submit OTP
                        </div>
                    </>
                );
            } else {
                set_msg(response.data);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    async function submit_otp() {
        const url_ = url + "/OTP"
        console.log(url_)
        const otp = document.querySelector("#OTP").value
        console.log(otp)
        const response = await axios.post(url_, { OTP: otp })
        console.log(response.data)
        if (response.data === "all ok") {
            window.location.href = "/Main"
        }
        else {
            set_msg(response.data)
        }
    }
    React.useEffect(() => {
        url_();
    }, [])
    return (
        <>
            <Banner />
            <div id="sign_div" >
            </div>
            <div id="sign" data-div="web_div">
                <h2 id="sign_head" data-text="web_text">Welcome to Fitness Freak</h2>
                <p id="head_msg" data-text="web_text">SignUp via Email</p>
                <input data-div="web_div" onChange={(e) => { set_name(e.target.value) }} data-text="web_text" className="SignInput" type="text" placeholder='Enter your name...' />
                <input data-div="web_div" onChange={(e) => { set_email(e.target.value) }} data-text="web_text" className="SignInput" type="text" placeholder="Enter your email address..." />
                <input data-div="web_div" onChange={(e) => { set_password(e.target.value) }} data-text="web_text" className="SignInput" type="password" placeholder="Create a new password" />
                <div data-text="web_text" data-div="web_div" id="submit_btn" onClick={submit}>
                    Proceed to create account
                </div>
                <div id="option_div">

                    {option}
                </div>
                <p data-text="web_text" id="error_msg">{msg}</p>
            </div>
        </>
    )
}
