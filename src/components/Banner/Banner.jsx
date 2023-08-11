import React from 'react';
import './Banner.css';
import { banner } from '../../Module/Content';
import { theme_restore } from '../../Module/function';

export default function Banner() {
    function typewriter(i) {
        let length = banner.length;
        let element = banner[i];

        if (i < length) {
            let j = 0;

            const adding = setInterval(() => {
                if (j < element.length) {
                    set_typewriter(element.slice(0, j));
                    j++;
                }
                else {
                    clearInterval(adding);

                    setTimeout(() => {
                        const remove = setInterval(() => {
                            if (element.length > 0) {
                                element = element.slice(0, -1);
                                set_typewriter(element);
                            } else {
                                clearInterval(remove);
                                typewriter(i + 1);
                            }
                        }, 20);
                    }, 1000);
                }
            }, 20);
        } else {
            typewriter(0);
        }
    }

    const [typewriter_text, set_typewriter] = React.useState('')
    React.useEffect(() => {
        typewriter(0)
        theme_restore()
    }, []);

    return (
        <div data-div="web_div" id="Banner" >
            <p data-text="web_text" id="text" >{typewriter_text}</p>
        </div>
    );
}





