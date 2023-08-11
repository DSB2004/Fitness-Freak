import React from 'react';
import logo from '../../Media/logo.jpeg';
import { account_, theme, icon_change } from '../../Module/function';
import './Header.css';
export default function Header() {
    const [account, set_account] = React.useState(account_())
    const [theme_, set_theme] = React.useState('')
    function theme_set() {
        set_theme(theme())
    }
    React.useEffect(() => {
        set_theme(icon_change())
        set_account(account_)
    }, [])
    return (
        <>
            <div id="header" data-div="web_div">
                <img src={logo} alt="" id="logo" />
                <h2 id="head" data-text="web_text">Fitness Freak</h2>
                <div id="user_div">
                    {account}
                </div>
                <div id="theme_div" onClick={theme_set}>{theme_}</div>
            </div>

        </>
    );
}
