import React, { useState, useEffect } from 'react'
import "./input.css"
import { FaEye } from 'react-icons/fa'
export default function Input({ type, placeholder, onValueChange }) {
    const [PasswordType, setType] = useState(true);
    useEffect(() => {
        if (type !== "password") {
            setType(false);
        }
        else if (type === "password") {
            setType(true);
        }
    }, [type])
    return (
        <div className="input-div m-20-0">
            <input onChange={(e) => { onValueChange(e.target.value) }} type={PasswordType ? "password" : "text"} className="p-10 shadow-1-1-10-1 trans-500" placeholder={placeholder} />
            {
                type === "password" ? <FaEye className="eye-icon  trans-500 " onClick={() => { setType(!PasswordType) }} /> : null
            }
        </div>
    )
}
