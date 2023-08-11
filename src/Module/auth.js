// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALt8mbIJavqgC4G6BYqA589BH6H7JK9Bk",
  authDomain: "fitness-freak-af18a.firebaseapp.com",
  projectId: "fitness-freak-af18a",
  storageBucket: "fitness-freak-af18a.appspot.com",
  messagingSenderId: "929968470251",
  appId: "1:929968470251:web:61d29a5bcfba58649c26ae",
  measurementId: "G-QEENR7KHLR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export { auth, provider };