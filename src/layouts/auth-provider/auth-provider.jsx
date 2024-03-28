import React from 'react'
import "./auth-provider.css"
import { useSelector } from 'react-redux'
export default function AuthProvider({ content, onClickEvent }) {
    return (
        <div onClick={() => { onClickEvent() }} className="auth-provider m-20-0 p-5 trans-500 flex-even shadow-1-1-4-2 ">
            <span className="trans-500 flex-center">{content && content.icon}</span>
            <h2 className="uppercase m-5">{content && content.text}</h2>
        </div>
    )
}
