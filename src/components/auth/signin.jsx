import React, { useState } from 'react'
import Input from '../../layouts/input/input';
import { CiDumbbell } from "react-icons/ci";
import { useSelector } from 'react-redux';
import AuthProvider from '../../layouts/auth-provider/auth-provider';
import { authproviderlist } from "../../assets/static/auth"
import Button from '../../layouts/button/button';
import { EmailSignIn } from '../../firebase/auth/email-user';
import { SignInWithGoogle } from '../../firebase/auth/auth-provider';
export default function SignIn() {
    const darkTheme = useSelector(state => state.Theme)
    const [email, changeEmail] = useState("")
    const [password, changePassword] = useState("")
    const [msg, setMsg] = useState("This is the Server msg")
    const handleSubmit = async () => {
        try {

            const data = { email, password }
            const respose = await EmailSignIn(data)
            setMsg("Form Submited")
        }
        catch (err) {
            setMsg(err.message)
        }
    }
    return (
        <form className='auth-form flex-top flex-column' onSubmit={(e) => { e.preventDefault() }}>
            <h1 className={`auth-form-h1 m-10`}>SIGNIN WITH FITNESS FREAK</h1>
            <span className={`auth-form-icon`}><CiDumbbell /></span>
            <div className="auth-input-div m-10">
                <Input type="text" placeholder="Enter your useremail" onValueChange={changeEmail}
                />
                <Input type="password" placeholder="Enter your password" onValueChange={changePassword}
                />
            </div>
            <Button content={{
                text: "Submit",
                action: handleSubmit
            }}></Button>
            <p className={`uppercase auth-msg m-20 `} >{msg}</p>
            <div className="auth-provider-div m-10">
                <AuthProvider content={authproviderlist[0]} key={authproviderlist[0].text} onClickEvent={SignInWithGoogle} />
            </div>

        </ form >
    )
}
