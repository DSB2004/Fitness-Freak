import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getThisFeatureData } from '../../util/feature-data'
import ReactPlayer from 'react-player'
export default function FeaturePage() {
    const { type, id } = useParams()
    const [content, updateContent] = useState()

    const handleRender = async (type, id) => {
        const res = await getThisFeatureData(type, id)
        updateContent(res.data)
    }
    useEffect(() => {
        if (type && id) {
            handleRender(type, id)
        }
    }, [])


    return (
        <section className='dashboard-article flex-center flex-column'>
            <div className='dashboard-feature-video'>
                <ReactPlayer url={content && content.link} width="100%" height="100%" className="dashboard-feature-video" />
            </div>
            <h1 className="dashboard-feature-header uppercase">{content && content.title}</h1>
            <p className="dashboard-feature-para">{content && content.data}</p>
        </section>
    )
}
