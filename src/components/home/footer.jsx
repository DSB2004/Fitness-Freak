import React from "react"
import { useSelector } from "react-redux";

const Footerlist = ({ content }) => {
    const darkTheme = useSelector(state => state.Theme)
    return (
        <div className="footerlist flex-left m-5" >
            <span className={`footerlist-icon flex-center trans-500 ${darkTheme ? "dark-text" : "light-text"}`} >{content && content.icon}</span>
            <a href={content && content.link} className={`trans-500 ${darkTheme ? "dark-text" : "light-text"}`}>
                <h4 className="footerlist-header m-0" >{content && content.content}</h4>
            </a>
        </div>
    )

}
const Footer = ({ content }) => {
    const darkTheme = useSelector(state => state.Theme)
    return (
        <footer id="contact" className={`contact-footer  trans-500 flex-center flex-wrap ${darkTheme ? "dark-s-bg" : "light-s-bg"}`}>
            <div className="contact-div">
                <h1 className={`contact-h1 m-10 trans-500 ${darkTheme ? "dark-text" : "light-text"}`}>
                    {content.heading}
                </h1>
                <p className={` m-10 contact-p trans-500 ${darkTheme ? "dark-text" : "light-text"}`}>{content.content}</p>
            </div>
            <div className="contact-div flex-center flex-column">
                {content.iconlist.map((element, count = 0) => {
                    count++;
                    return (<Footerlist content={element} key={count} />)
                })}
            </div>
        </footer>
    )
}

export default Footer;