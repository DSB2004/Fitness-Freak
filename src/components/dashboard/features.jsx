import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getCombineFeatureData } from '../../util/feature-data';
import Overlay from "../../layouts/overlay/overlay"

const FeatureDiv = ({ content, nav }) => {
    const navigate = useNavigate()
    return (<>
        <div className='feature-div flex-center uppercase' onClick={
            () => {
                if (content) {
                    navigate(`${nav}`)
                }
            }}>
            {content ? <></> : <Overlay />}
            {content && content.title}
        </div>
    </>)
}

export default function Features() {
    const { type } = useParams();
    const [array, setArray] = useState([<FeatureDiv />, <FeatureDiv />, <FeatureDiv />])
    const [featureInfo, updateInfo] = useState()
    const features = useSelector(state => state.Feature.featureList)

    const handleRender = async () => {
        const res = await getCombineFeatureData(type)
        setArray(res.content)
    }

    const handleInfo = () => {
        if (features.length !== 0) {
            const featureInfo = features.filter(element => element.id === type)[0]
            updateInfo(featureInfo.data)
        }
    }

    useEffect(() => {
        handleInfo();
    }, [features])

    useEffect(() => {
        handleRender()
    }, [type]);

    return (
        <>
            <section className='dashboard-overlay'>
                <article className='feature-head' style={{ backgroundImage: `url(${featureInfo && featureInfo.img})` }}>
                    <div className='overlay-black-bg'></div>
                    <h1 className='feature-head-title uppercase'>{featureInfo && featureInfo.title}</h1>
                </article>
                <article className='dashboard-article flex-left flex-wrap'>
                    {array.map(element => { return <FeatureDiv content={element.data} key={element.id} nav={element.id} /> })}
                </article>
            </section >
        </>
    );
}

















