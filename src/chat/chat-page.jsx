import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatMessageDiv from './layouts/chat-message-div';
import ChatHeader from './layouts/chat-header';
import ChatInput from './layouts/chat-input';
import { sendMessage } from '../firebase/database/message';
import "./chat.css"
export default function ChatPage() {
    const navigate = useNavigate();
    const [msg, updateMsg] = useState("");
    const handleSubmit = async () => {
        await sendMessage(msg);
    }
    return (
        <>
            <article className="chat-page trans-500 ">
                <ChatHeader action={() => { navigate(-1) }} showThemeBtn={true} />
                <ChatMessageDiv />
                <ChatInput onValueChange={updateMsg} submitAction={handleSubmit} />
            </article >
        </>
    )
}
