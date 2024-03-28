import React, { useState } from 'react'
import "./user.css"
import { useSelector } from "react-redux"
import { FaUser } from "react-icons/fa"

import { SignOut } from "../../firebase/auth/email-user"


const User = () => {
    const User = useSelector(state => state.User)
    const [cardStatus, updateState] = useState(false)
    const handleClick = () => {
        if (User !== null && User.uid !== null) {
            updateState(!cardStatus)
        }
    }
    return (<>
        <div className="user-info flex-center" >
            <FaUser onClick={() => { handleClick() }} className='user-btn' />
            <div className={`user-info-container ${cardStatus ? "userinfo-flex" : ""}`}>
                <li className='user-info-container-name'>{User && User.name}</li>
                <li className='user-info-container-email'>{User && User.email}</li>
                <button className='logout-btn' onClick={() => { SignOut() }}>LOGOUT</button>
            </div>
        </div >
    </>)
}

export default User;