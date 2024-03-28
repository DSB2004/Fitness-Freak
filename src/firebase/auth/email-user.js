import { Auth } from "../app";
import Store from "../../hook/store"
import { updateUser } from "../../hook/redux-slice/user";
import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
    updateProfile,
    signOut,
    signInWithEmailAndPassword,

} from "firebase/auth";



const errorType = (code) => {
    if (code === "auth/email-already-in-use") {
        return "Account in use";
    } else if (code === "auth/missing-password") {
        return "Missing Password";
    } else if (code === "auth/missing-email") {
        return "Missing Email";
    } else if (code === "auth/weak-password") {
        return "Weak password";
    } else if (code === "auth/invalid-email") {
        return "Invalid Email";
    }
    if (code === "auth/user-not-found") {
        return "User Not Found";
    } else if (code === "auth/wrong-password") {
        return "Wrong password";
    } else if (code === "auth/too-many-requests") {
        return "Too many Attemps";
    } else {
        return "Please Try Again";
    }
};

export const EmailSignUp = async (data) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            Auth,
            data.email,
            data.password
        );
        const user = userCredential.user;
        await updateProfile(user, {
            displayName: data.name,
        });
        sendEmailVerification(user);
        return { status: true, id: user.uid };
    } catch (err) {
        throw new Error(errorType(err.code));
    }
}

export const EmailSignIn = async (data) => {
    try {
        const user = await signInWithEmailAndPassword(Auth, data.email, data.password)
        console.log(user)
        return { status: true, id: user.uid };
    }
    catch (err) {
        throw new Error(errorType(err.code));
    }
}

export const SignOut = async () => {
    await signOut(Auth);
    Store.dispatch(updateUser({ uid: null, name: null, email: null }))
}