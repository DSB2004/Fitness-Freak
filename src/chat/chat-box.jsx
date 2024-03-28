import React, { useState } from 'react'
import { MdOutlineChat } from "react-icons/md";
import ChatMessageDiv from './layouts/chat-message-div';
import ChatHeader from './layouts/chat-header';
import ChatInput from './layouts/chat-input';

import { sendMessage } from '../firebase/database/message';
import "./chat.css"
export default function ChatBox() {
    const [openChat, toggleChat] = useState(false);
    const [msg, updateMsg] = useState("");
    const handleSubmit = async () => {
        await sendMessage(msg);
    }
    return (
        <>
            <div className='chat-toggle-btn p-10 flex-center' onClick={() => { toggleChat(!openChat) }}>
                <MdOutlineChat />
            </div>
            <article className={`chat-box ${openChat ? "open-box" : "close-box"} trans-500`}>
                <ChatHeader action={() => { toggleChat(false) }} />
                <ChatMessageDiv />
                <ChatInput onValueChange={updateMsg} submitAction={handleSubmit} />
            </article >
        </>
    )
}
