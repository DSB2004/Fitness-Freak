import React, { useEffect, useRef, useState } from 'react'
import ChatMsg from './chat-msg'
import { useSelector } from 'react-redux';
import { MessageCollection } from '../../firebase/database/message';
import { onSnapshot } from 'firebase/firestore';
export default function ChatMessageDiv() {
    const chatBoxRef = useRef(null);
    const [msgArray, updateArray] = useState([])
    const User = useSelector(state => state.User)

    async function messageUpdate() {
        onSnapshot(MessageCollection, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                const newMsg = change.doc.data();
                const id = change.doc.id;
                if (change.type === "added") {
                    updateArray((prevState) => [
                        ...prevState,
                        <ChatMsg content={{ msg: newMsg.msg, user: newMsg.user }} key={id} />
                    ]);
                }
            });
        });
    }

    useEffect(() => {
        if (User !== null && User.uid !== null) {
            messageUpdate();
            if (chatBoxRef.current) {
                chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
            }
        }
    }, [User]);

    return (
        <div ref={chatBoxRef} className="chat-message-div" >
            {msgArray}
        </div>
    )
}
