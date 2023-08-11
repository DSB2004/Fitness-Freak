import React from 'react'
import { gym } from '../../Module/Content'
import "./gym.css"
import Content from '../Content/Content'
export default function Gym({ onValueChange }) {
    function gym_() {
        localStorage.setItem("type", "gym")
        onValueChange(<Content />)
    }
    return (
        <>
            <div id="gym_div">
                <h2 id="gym_head">Gym Beast</h2>
                <div data-div="web_div" id="gym">
                    <p id="gym_content">
                        {gym.gym1}
                    </p>
                    <div id="gym_points">
                        {gym.gym2}
                        <br /><br />
                        {gym.gym3}
                        <br /><br />
                        {gym.gym4}
                        <br /><br />
                        {gym.gym5}
                        <br /><br />
                        {gym.gym6}
                    </div>
                    <div id="button_div">
                        <button data-div="web_div" data-text="web_text" id="move_btn" onClick={gym_}>More about it</button>
                    </div>
                </div>
            </div >
        </>
    )
}
