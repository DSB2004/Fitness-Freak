import React from 'react'
import { homepage, quote, moto } from '../../Module/Content'
import { great_, quote_, moto_ } from '../../Module/function'
import './Homepage.css'
export default function Homepage() {
    const [great, set_greet] = React.useState('')
    const [motos, set_moto] = React.useState(
        <>
            <p id="title">
                {moto[0].title}
            </p>
            <p id="moto_content">
                {moto[0].content}
            </p>
        </>
    )
    const [quotes, set_quote] = React.useState(<>
        <p id="quote">
            {quote[0].quote}
        </p>
        <p id="author">
            {quote[0].author}
        </p>
    </>)
    React.useEffect(() => {
        let i = 1
        set_greet(great_())
        const interval1 = setInterval(() => {
            if (i === quote.length) {
                i = 0;
            }
            set_quote(quote_(i))
            i++
        }, 5000)
        const interval2 = setInterval(() => {
            if (i === moto.length) {
                i = 0;
            }
            set_moto(moto_(i))
            i++
        }, 5000)
        return () => {
            clearInterval(interval1)
            clearInterval(interval2)
        };

    }, [])
    return (
        <div>
            < h1 id="great">
                {great}...
            </h1>
            <div id="quote_div" >
                {quotes}
            </div>
            <h3 id="coverline">
                {homepage.content}
            </h3>
            <div id="moto_div">
                <div id="motos">
                    {motos}
                </div>
            </div>
        </div>
    )
}
