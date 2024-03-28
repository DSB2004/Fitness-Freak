import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "./button.css"
const Button = ({ content, className }) => {
    const darkTheme = useSelector(state => state.Theme)
    const navigate = useNavigate()
    return (
        <button
            className={`button shadow-1-1 s-bg ${className}`}
            onClick={() => {
                if (content.link) {
                    navigate(content.link)
                }
                else if (content.action) {
                    const func = content.action
                    func()
                }
            }
            }

        >

            <span className={`uppercase trans-500 ${darkTheme ? "light-text" : "dark-text"}`} >
                {content && content.text}
            </span>
        </button>
    )
}


export default Button;