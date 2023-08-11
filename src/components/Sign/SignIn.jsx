import React from 'react'
import Banner from '../Banner/Banner'
import "./sign.css"
import google from '../../Media/Google Logo.png'
import { Link } from 'react-router-dom'
import { ImSpinner2 } from "react-icons/im"
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../Module/auth'
import axios from 'axios'

export default function SignIn() {
    const [msg, set_msg] = React.useState('')
    const [Email, set_email] = React.useState('')
    const [Password, set_password] = React.useState('')
    const [url, set_url] = React.useState(window.location)
    const [option, set_option] = React.useState(
        <>
            <div id="other_option">
                <p data-text="web_text" id="option_head">More options</p>
                <div className='other_div' onClick={google_signin} id="google">
                    <img id="google_logo" src={google} alt="" />
                    SignUp with Google</div>
            </div>
            <Link data-text="web_text" onClick={forget} to="#" id="alert_bar">Opps..forget password</Link>
            <Link data-text="web_text" to="/SignUp" id="alert_bar">Wanna start a new journey ??</Link>
        </>
    )
    async function google_signin() {
        signInWithPopup(auth, provider)
            .then(async (data) => {
                let photo = data.user.providerData[0].photoURL
                let user_data = { Email: data.user.email, Name: data.user.displayName, photo: photo }
                const url_ = url + "/Google"
                try {
                    const response = await axios.post(url_, user_data);
                    console.log(response.data)

                    if (response.data === "all ok") {
                        localStorage.setItem("user", JSON.stringify(user_data))
                        window.location.href = "/Main"
                    }
                    else {
                        set_msg(response.data)
                    }
                }
                catch (err) {
                    console.log(err)
                }
            })
    }
    const submit = async (e) => {
        set_msg(<ImSpinner2 id="loading" />);
        e.preventDefault();
        const user_data = { Email, Password };
        console.log(Email)
        if (Email === null) {
            set_msg("Email can't be negative");
            return;
        }

        console.log(user_data);


        console.log(url)
        try {
            const response = await axios.post(url, user_data);
            console.log(response.data)
            if (response.data === "all ok") {
                localStorage.setItem("user", JSON.stringify(user_data))
                window.location.href = "/Main"
            } else {
                set_msg(response.data);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    async function submit_email() {
        const url_ = url + "/forget"
        set_msg(<ImSpinner2 id="loading" />)
        try {
            const Email = document.querySelector("#Email").value
            const response = await axios.post(url_, { Email });
            console.log(response.data)
            if (response.data === "all ok") {
                set_option(
                    <>
                        <p id="head_msg" data-text="web_text">Enter OTP</p>
                        <input data-div="web_div" id="OTP" data-text="web_text" className="SignInput" type="text" placeholder='Enter the OTP' />
                        <div data-text="web_text" data-div="web_div" id="submit_btn" onClick={submit_OTP}>
                            Submit OTP
                        </div>
                    </>
                )
            } else {
                set_msg(response.data);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    async function submit_OTP() {
        const url_ = url + "/verify_OTP"
        const otp = document.querySelector("#OTP").value
        console.log(otp)
        const response = await axios.post(url_, { OTP: otp })
        console.log(response.data)
        if (response.data === "all ok") {
            set_option(
                <>
                    <p id="head_msg" data-text="web_text">Enter OTP</p>
                    <input data-div="web_div" id="password" data-text="web_text" className="SignInput" type="password" placeholder='Create new password' />
                    <div data-text="web_text" data-div="web_div" id="submit_btn" onClick={submit_password}>
                        Change Password
                    </div>
                </>
            )
        }
        else {
            set_msg(response.data)
        }
    }
    async function submit_password() {
        const url_ = url + "/new_password"
        const password = document.querySelector("#password").value
        console.log(password)
        const response = await axios.post(url_, { Password: password })
        console.log(response.data)
        if (response.data === "all ok") {
            window.location.href = "/SignIn"
        }
        else {
            set_msg(response.data)
        }
    }
    function forget() {
        set_msg('')
        set_option(
            <>
                <p id="head_msg" data-text="web_text">Enter your registered email</p>
                <input data-div="web_div" id="Email" data-text="web_text" onChange={(e) => { set_email(e.target.value) }} className="SignInput" type="text" placeholder="Enter your email address..." />
                <div data-text="web_text" data-btn="btn-1" data-div="web_div" id="submit_btn" onClick={submit_email}>
                    Submit Email
                </div>

            </>
        )
    }
    return (
        <>
            <Banner />
            <div id="sign_div" >
            </div>
            <div id="sign" data-div="web_div">
                <h2 id="sign_head" data-text="web_text">Welcome to Fitness Freak</h2>
                <p id="head_msg" data-text="web_text">SignIn via Email</p>
                <input data-div="web_div" data-text="web_text" onChange={(e) => { set_email(e.target.value) }} className="SignInput" type="text" placeholder="Enter your email address..." />
                <input data-div="web_div" data-text="web_text" onChange={(e) => { set_password(e.target.value) }} className="SignInput" type="password" placeholder="Enter your new password" />
                <div onClick={submit} data-text="web_text" data-div="web_div" id="submit_btn" >
                    Proceed to verification
                </div>
                <div id="option_div">

                    {option}
                </div>
                <p data-text="web_text" id="error_msg">{msg}</p>
            </div>
        </>
    )
}
