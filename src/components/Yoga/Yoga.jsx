import React from 'react'
import { yoga } from "../../Module/Content"
import "./Yoga.css"
import Content from '../Content/Content'
export default function Yoga({ onValueChange }) {
  function yoga_() {
    localStorage.setItem("type", "yoga")
    onValueChange(<Content />)
  }
  return (
    <>
      <div id="yoga_div">
        <h2 id="yoga_head">ZenFlow-Yoga</h2>
        <div id="yoga">
          <p id="yoga_content">
            {yoga.yoga1}
          </p>
          <br />
          <p id="yoga_content">
            {yoga.yoga2}
          </p>
          <div id="button_div">
            <button data-div="web_div" data-text="web_text" onClick={yoga_} id="move_btn">More about it</button>
          </div>
        </div>
      </div >
    </>
  )
}