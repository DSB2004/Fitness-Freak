import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const SDK_KEY = process.env.REACT_APP_FIREBASE_KEY

const firebaseConfig = {
    apiKey: SDK_KEY,
    authDomain: "fitness-freak-af18a.firebaseapp.com",
    projectId: "fitness-freak-af18a",
    storageBucket: "fitness-freak-af18a.appspot.com",
    messagingSenderId: "929968470251",
    appId: "1:929968470251:web:61d29a5bcfba58649c26ae",
    measurementId: "G-QEENR7KHLR"
};



export const App = initializeApp(firebaseConfig);
export const Auth = getAuth(App);
export const Database = getFirestore(App);


