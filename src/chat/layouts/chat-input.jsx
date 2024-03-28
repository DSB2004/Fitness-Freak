import React from 'react'
import { useSelector } from 'react-redux'
import { MdOutlineSend } from "react-icons/md";
export default function ChatInput({ onValueChange, submitAction }) {
    const handleClick = () => {
        const element = document.querySelector("#chat-input")
        if (element && element.value !== "" && element.value !== undefined) {
            submitAction()
            element.value = "";
        }
    }
    return (
        <div className="chat-input flex-justify">
            <input id="chat-input" type="text" className="p-10" onChange={(e) => { onValueChange(e.target.value) }} />
            <button className='trans-500 msg-sumbit-btn flex-center s-bg' onClick={() => { handleClick() }}>
                < MdOutlineSend className='dark-text' />
            </button>
        </div>
    )
}
