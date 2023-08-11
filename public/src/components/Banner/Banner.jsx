import React from 'react';
import './Banner.css';
import { text_ } from '../../Module/function';

export default function Banner() {
    React.useEffect(() => {
        const banner_text = setInterval(() => { text_("#text") }, 100);
        return () => {
            clearInterval(banner_text);
        };
    }, []);

    return (
        <div data-div="web_div" id="Banner" >
            <p data-text="web_text" id="text" ></p>
        </div>
    );
}





