import { MdHomeFilled } from "react-icons/md";
import { FaCircleInfo } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { IoMailSharp } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { FaUserPlus } from "react-icons/fa";


export const header = {
    dropmenuList: [{ icon: <MdHomeFilled />, id: "home" }, { icon: <FaCircleInfo />, id: "about" }, , { icon: <MdOutlinePermContactCalendar />, id: "contact" }, { icon: <FaUserPlus />, id: "signup", link: "/auth/signup" }],
    headerList: [{ name: "Home", id: "home" }, { name: "About Us", id: "about" }],
    button: [{ text: "Let's Go", link: "/auth/signup" }]
}
export const hero = {
    heading: "MEET THE ULTIMATE FITNESS GUIDE",
    welcome: "WELCOME TO FITNESS FREAK",
    welcomepara: "Welcome to our online fitness hub! Explore a wealth of resources—blogs, videos, and expert advice—on health and wellness. Whether you're starting your fitness journey or aiming to elevate workouts, find everything you need here. Our user-friendly platform makes achieving your goals effortless. Join our community today for a healthier, happier you!"
}
export const about = {
    heading: "about us",
    para: ["Welcome to Fitness Freak, your online hub dedicated to promoting fitness and gym exercise. We're here to inspire individuals of all levels to embrace a healthier lifestyle through regular physical activity. With informative content ranging from workout routines to nutrition tips, we're committed to empowering you on your fitness journey. Join us as we encourage a community of like-minded individuals to prioritize their health and well-being through the simplicity and effectiveness of exercise.", "We're passionate about fostering a community that celebrates the transformative power of fitness and gym exercise. Now, let's delve into the array of services our platform offers to support your journey to a healthier, happier you."],
}

export const footer = {
    heading: "FITNESS FREAK",
    content: "Welcome to Fitness Freak! We're committed to your holistic wellness, providing personalized plans curated by experts in fitness and nutrition. Join our vibrant community and embark on a journey to lifelong vitality with us!",
    iconlist: [{ icon: <IoMailSharp />, content: "info@fitnessfreak.com", link: "/" }, { icon: < FaGithub />, content: "github-repo", link: "/" }, { icon: <CiGlobe />, content: "fitness freak", link: "/" }]
}
