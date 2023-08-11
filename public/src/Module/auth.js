// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyAMfeS1K2tGjLsBUMR5ZL7KMr2yNqcuK2M",
    authDomain: "fitness-freak-88c16.firebaseapp.com",
    projectId: "fitness-freak-88c16",
    storageBucket: "fitness-freak-88c16.appspot.com",
    messagingSenderId: "1087186174937",
    appId: "1:1087186174937:web:30fdfdcd60f883c6f7cfc8",
    measurementId: "G-MRC66RHVEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export { auth, provider }

