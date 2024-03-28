import React from 'react'
import "./blog-card.css"
import Overlay from '../overlay/overlay';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function BlogCard({ content }) {
    return (
        <>
            <div className='blog-card flex-even flex-column' onClick={() => {
                if (content) {
                    window.open(content.link, '_blank');
                }
            }}>
                {content ? <></> : <Overlay />}
                <div className={`blog-card-img ${content ? "" : "load"} `}>
                    {content ? (
                        <LazyLoadImage
                            alt={content.header}
                            effect="blur"
                            height="100%"
                            src={content.img}
                            width="100%"
                        />
                    ) : null}
                </div>
                <div className={`blog-card-header uppercase ${content ? "" : "load"} `}>
                    {content && content.header}
                </div>
                <div className={`blog-card-p ${content ? "" : "load"} `}>
                    {content && content.intro}
                </div>


            </div>
        </>
    )
}



