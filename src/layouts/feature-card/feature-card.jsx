import React from 'react'
import "./feature-card.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Overlay from '../overlay/overlay'
import { useNavigate } from 'react-router-dom'

export default function FeatureCard({ content }) {
    const navigate = useNavigate()

    const handleClick = () => {
        if (content) {
            navigate(`features/${content.title}`)
        }
    }

    return (
        <div className='feature-card flex-even flex-column' onClick={() => { handleClick() }}>
            {content ? null : <Overlay />}
            <div className={`card-image ${content ? "" : "load"}`}>
                {content ? (
                    <LazyLoadImage
                        alt={content.title}
                        effect="blur"
                        height="100%"
                        src={content.img}
                        width="100%"
                    />
                ) : null}
            </div>
            <div className={`uppercase flex-center card-header ${content ? "" : "load"}`}>
                {content && content.title}
            </div>
        </div>
    )
}

