import { FaSignInAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
export const header = {
    dropmenuList: [{ icon: <FaUserPlus />, id: "signup", link: "/auth/signup" }, { icon: <FaSignInAlt />, id: "signin", link: "/auth/signin" }, { icon: <MdHomeFilled />, id: "home", link: "/" }],
    headerList: [{ name: "signup", id: "signup", link: "/auth/signup" }, { name: "SignIn", id: "signin", link: "/auth/signin" }, { name: "Home", id: "home", link: "/" }]
}


export const authproviderlist = [{ icon: < FcGoogle />, text: "Signin with google" }, { icon: <FaGithub />, text: "Signin with Github" }]
