import React from "react";

const About = ({ content }) => {
    return (
        <article id="about" className=" m-auto home-section">
            <h1 className="s-color uppercase heading">{content && content.heading}</h1>
            {content && content.para.map((element, index) => { index++; return <p className="para" key={index} >  {element}</p> })}
        </article>
    )
}

export default About;