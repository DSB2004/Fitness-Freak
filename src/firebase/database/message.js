import { Database } from "../app";
import {
    collection,
    addDoc,
    serverTimestamp,
    query, orderBy
} from "firebase/firestore";

import Store from "../../hook/store";


export const MessageCollection = query(collection(Database, "messages"), orderBy("timestamp"))

const MessageCollection2 = collection(Database, "messages");

export const sendMessage = async (content) => {
    try {
        const msgContent = {
            user: Store.getState().User.email, msg: content, timestamp: serverTimestamp()
        }
        console.log(msgContent)
        await addDoc(MessageCollection2, msgContent);
    } catch (err) {
        console.log(err)
    }
};
