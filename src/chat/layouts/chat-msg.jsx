import React from 'react'
import { useSelector } from 'react-redux'
export default function ChatMsg({ content }) {
    const userinfo = useSelector(state => state.User)
    return (
        <div className={`chat-msg trans-500  m-10 p-10 ${content && content.user === userinfo.email ? "user-msg" : ""}`}>
            <h4 className="m-5-0" title={content.user}>{content.user}</h4>
            <p className="m-0">{content.msg}</p>
        </div >
    )
}


// 