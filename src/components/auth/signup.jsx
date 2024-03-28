import React, { useState } from 'react'
import Input from '../../layouts/input/input';
import { CiDumbbell } from "react-icons/ci";
import { useSelector } from 'react-redux';
import { EmailSignUp } from '../../firebase/auth/email-user';
import Button from '../../layouts/button/button';
export default function SignUp() {
    const darkTheme = useSelector(state => state.Theme)
    const [name, changeName] = useState("")
    const [email, changeEmail] = useState("")
    const [password, changePassword] = useState("")
    const [msg, setMsg] = useState("")
    const handleSubmit = async () => {
        try {
            const data = { name, email, password }
            setMsg("Waiting for response")
            const response = await EmailSignUp(data);
        }
        catch (err) {
            setMsg(err.message)
        }
    }
    return (
        <form className='auth-form shadow-1-1-4-2 flex-top flex-column' onSubmit={(e) => { e.preventDefault() }}>
            <h1 className={`trans-500 upercase ${darkTheme ? "dark-text" : "light-text"}
             auth-form-h1 m-10`}>SIGNUP WITH FITNESS FREAK</h1>
            <span className={`trans-500 ${darkTheme ? "dark-text" : "light-text"} auth-form-icon`}><CiDumbbell /></span>
            <div className="auth-input-div m-10 trans-500">
                <Input type="text" placeholder="Enter your name" onValueChange={changeName}
                />
                <Input type="text" placeholder="Enter your useremail" onValueChange={changeEmail}
                />
                <Input type="password" placeholder="Enter your password" onValueChange={changePassword}
                />
            </div>
            <Button content={{
                text: "Submit",
                action: handleSubmit
            }}></Button>
            <p className={` ${darkTheme ? "dark-text" : "light-text"} trans-500  uppercase auth-msg m-20 `} >{msg}</p>
        </ form >
    )
}
