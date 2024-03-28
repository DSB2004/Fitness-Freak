import React from 'react'
import "../style/loading.css"

export default function Loading() {
    return (
        <section className='loading-section flex-center flex-column'>
            <h1 className='uppercase loading-heading'>
                LOADING
            </h1>
            <div className="loader-line"></div>
        </section>
    )
}
