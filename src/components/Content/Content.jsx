import React from 'react'
import "./Content.css"
import { next, previous, re_new } from '../../Module/function'

export default function Content() {
  const [element, set_element] = React.useState(re_new)
  function next_() {
    set_element(next())
  }
  function previous_(id) {
    set_element(previous())
  }
  return (
    <>
      <div id="content_nav">
        <button data-div="web_div" data-text="web_text" className="nav_btn" id="previous" onClick={previous_}>Previous</button>
        <button data-div="web_div" data-text="web_text" className="nav_btn" id="next" onClick={next_}>Next</button>
      </div>
      <h2 id="content_head">{element.title}</h2>
      <div id="content_div">
        <div id="content_data">
          <iframe id="video" src={element.video} allow="accelerometer;autoplay;picture-in-picture" allowfullscreen class="Video"></iframe>
          <div id="content_">
            <p id="data">{element.data}</p>
          </div>
        </div>
      </div>
    </>
  )
}
