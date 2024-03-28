import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { IoMdChatboxes } from "react-icons/io";
export default function ChatHeader({ action }) {

    return (

        <div className='chat-heading s-bg flex-left' >
            <FaArrowLeft className="chat-header-icon dark-text m-0-10" onClick={() => { if (action) { action() } }} />
            <IoMdChatboxes className="chat-header-icon dark-text m-0-10" />
            <h1 className='m-0 dark-text uppercase '>Community Chat</h1>
        </div>
    )
}
