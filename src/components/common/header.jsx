import React, { useState } from "react"
import "../../style/header.css"
import { RiMenu4Fill } from "react-icons/ri";
import Button from "../../layouts/button/button"
import { CiDumbbell } from "react-icons/ci";
import { sliderintoview } from "../../util/common/slider";
import { useNavigate } from "react-router-dom";
import User from "../../layouts/user/user";

const DropList = ({ content, onClickEvent }) => {
    const navigate = useNavigate()
    return (<>
        <li className={`trans-500 drop-list m-10-0`}
            onClick={() => {

                if (onClickEvent) {
                    onClickEvent()
                }
                if (content.id) {
                    sliderintoview(content.id)
                }
                if (content.link !== undefined) {
                    navigate(content.link)
                }
            }}
        >{content && content.icon}

        </li>

    </>)
}
const List = ({ content, active, onClickEvent }) => {
    const navigate = useNavigate()
    return (<>
        <li className={`trans-500 ${content.id && (active === content.id) ? "s-color" : ""} header-list uppercase m-0-5`}
            onClick={() => {
                if (onClickEvent) {
                    onClickEvent()
                }
                if (content.id) {
                    sliderintoview(content.id)
                }
                if (content.link !== undefined) {
                    navigate(content.link)
                }
            }}
        >{content && content.name}
            <div className={`list-underline trans-500 ${content.id && (active === content.id) ? "active-list" : ""}`}></div>
        </li>
    </>)
}
const Header = ({ content, overlay, user }) => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(content.headerList[0].id)
    const [isScrolled, changeScrolled] = useState(false)
    const handleScrolled = () => {
        if (window.scrollY > 20) {
            changeScrolled(true);
        } else {
            changeScrolled(false);
        }
    };
    window.addEventListener("scroll", handleScrolled);
    return (
        <>
            <header className={`header flex-center trans-500 ${(isScrolled === true) ? "opac-bg" : ""}`} >

                <div className="flex-center m-0-10  header-head-div">
                    <CiDumbbell className=" header-icon" />
                    <h1 className=" header-heading uppercase m-0-5">Fitness Freak</h1>
                </div>
                <ul className="p-0 flex-center m-0-10">
                    {(content !== undefined) ? content.headerList.map((element, count = 0) => {
                        count++;
                        return <List overlay={overlay === "True" && isScrolled} content={element} key={count} active={active} onClickEvent={() => { setActive(element.id) }} />;
                    }) : null}
                    {(content && content.button) ?
                        <>
                            {
                                content.button.map((element, count = 0) => {
                                    count++;
                                    return <Button content={element} key={count} />;
                                })
                            }
                        </> :
                        null
                    }
                </ul>
                <div className="flex-center">
                    {user ? <User /> : <></>}
                    <RiMenu4Fill className="menu-list m-0-10" onClick={() => { setOpen(!open) }} />
                </div>
                <nav className={`shadow-1-1-10-4 s-bg flex-center flex-column drop-menu trans-500 ${open ? "open-menu" : ""}`}>

                    {(content !== undefined) ? content.dropmenuList.map((element, count = 0) => {
                        count++;
                        return <DropList key={count} content={element} active={active} onClickEvent={() => { setActive(element.id) }} />
                    }) : null}

                </nav>
            </header>
        </>
    )
}
export default Header;