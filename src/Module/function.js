import { banner, quote, moto, gym_content, yoga_content } from "./Content"
import User from '../Media/default_user_pic.png'
import { FaSun } from "react-icons/fa"
import { BsFillMoonStarsFill } from "react-icons/bs"
function great_() {
    let d_ = new Date
    if (d_.getHours() >= 5 && d_.getHours() < 12) {
        return "Good morning"
    }
    else if (d_.getHours() >= 12 && d_.getHours() < 17) {
        return "Good afternoon"
    }
    else {
        return "Good evening"
    }
}
function quote_(i) {
    let element = quote[i]
    return (<>
        <p id="quote">
            {element.quote}
        </p>
        <p id="author">
            {element.author}
        </p>
    </>)
}
function moto_(i) {
    let element = moto[i]
    return (<>
        <p id="title">
            {element.title}
        </p>
        <p id="moto_content">
            {element.content}
        </p>
    </>)
}
function signout() {

    localStorage.removeItem("user")
    localStorage.removeItem("type")
    window.location.href = "/";
}
function account_() {

    if (localStorage.getItem("user") !== null) {
        let Account = JSON.parse(localStorage.getItem("user"))
        if (!Account.photo) {
            return (<>
                <div id="user">
                    <h5 id="username" data-text="web_text">{Account.Name}</h5>
                    <h6 id="userid" data-text="web_text">{Account.Email}</h6>
                </div>
                <img src={User} id="User_pic" alt="" />
            </>)
        }
        else if (Account.photo) {
            return (<>
                <div id='user'>
                    <h5 id="username" data-text="web_text">{Account.Name}</h5>
                    <h6 id="userid" data-text="web_text">{Account.Email}</h6>
                </div>
                <img src={Account.photo} id="Google_pic" alt="" />
            </>)
        }
    }
}
var i = 0, len;
function re_new() {
    i = 0
    len = 0
    if (localStorage.getItem('type') === "gym") {
        return gym_content[0]
    }
    else if (localStorage.getItem('type') === "yoga") {
        return yoga_content[0]
    }

}
function display(j) {
    let type = localStorage.getItem('type')
    if (type === 'gym') {
        len = gym_content.length;
        return gym_content[j];
    }
    else if (type === 'yoga') {
        len = yoga_content.length;
        return yoga_content[j];
    }
}
function next() {
    var button_f = document.querySelector("#next")
    var button_b = document.querySelector("#previous")
    i += 1;
    if (i === len - 1) {
        button_f.style.display = "none"
    }
    else {
        button_f.style.display = "inline"
        button_b.style.display = "inline"

    }
    return display(i)
}
function previous() {
    let button_f = document.querySelector("#next")
    let button_b = document.querySelector("#previous")
    i -= 1;
    if (i === 0) {
        button_b.style.display = "none"
    }
    else {
        button_f.style.display = "inline"
        button_b.style.display = "inline"
    }
    return display(i)
}

function icon_change() {
    theme_restore()
    if (localStorage.getItem("FF_theme") === "dark") {
        return <BsFillMoonStarsFill id="moon" className='theme_icon' />
    }
    else if (localStorage.getItem("FF_theme") === "light") {
        return <FaSun id="sun" className='theme_icon' />
    }
    else {
        localStorage.setItem("FF_theme", "light")
        return <FaSun id="sun" className='theme_icon' />
    }
}



function theme() {
    console.log(localStorage.getItem("FF_theme"))
    const root = document.querySelector(':root');
    if (localStorage.getItem("FF_theme") === "light") {
        root.style.setProperty('--web-div-background-color', 'rgb(26, 26, 26)');
        root.style.setProperty('--web-text-color', 'white')
        root.style.setProperty('--web-div-border-color', 'white')
        root.style.setProperty('--body-background-color', "rgb(50 50 50)")
        localStorage.setItem("FF_theme", "dark")
        return <BsFillMoonStarsFill id="moon" className='theme_icon' />
    }
    else if (localStorage.getItem("FF_theme") === "dark") {
        root.style.setProperty('--web-div-background-color', 'rgb(219, 219, 219)');
        root.style.setProperty('--web-text-color', 'black')
        root.style.setProperty('--web-div-border-color', 'black')
        root.style.setProperty('--body-background-color', "rgb(214 214 214)")
        localStorage.setItem("FF_theme", "light")
        return <FaSun id="sun" className='theme_icon' />
    }
}
function theme_restore() {
    console.log(localStorage.getItem("FF_theme"))
    const root = document.querySelector(':root');
    if (localStorage.getItem("FF_theme") === "dark") {
        root.style.setProperty('--web-div-background-color', 'rgb(26, 26, 26)');
        root.style.setProperty('--web-text-color', 'white')
        root.style.setProperty('--web-div-border-color', 'white')
        root.style.setProperty('--body-background-color', "rgb(50 50 50)")
    }
    else if (localStorage.getItem("FF_theme") === "light") {
        root.style.setProperty('--web-div-background-color', 'rgb(219, 219, 219)');
        root.style.setProperty('--web-text-color', 'black')
        root.style.setProperty('--web-div-border-color', 'black')
        root.style.setProperty('--body-background-color', "rgb(214 214 214)")
    }
}
function scrollto(n) {
    const ham_menu = document.querySelector("#innerdrop");
    window.scrollTo({
        top: n,
        behavior: 'smooth'
    });
    ham_menu.style.height = "0px";
    ham_menu.style.opacity = "0";
    setTimeout(() => {
        ham_menu.style.display = "none";
    }, 200);
}
function open() {
    const ham_menu = document.querySelector("#innerdrop");
    ham_menu.style.display = "flex";
    setTimeout(() => {
        ham_menu.style.height = "60px";
        ham_menu.style.opacity = "1";
    }, 100)
}
function close() {
    const ham_menu = document.querySelector("#innerdrop");
    ham_menu.style.height = "0px";
    ham_menu.style.opacity = "0";
    setTimeout(() => {
        ham_menu.style.display = "none";
    }, 500);
}



export { open, close, scrollto, icon_change, theme, theme_restore, re_new, previous, next, great_, quote_, moto_, account_, signout, display }












