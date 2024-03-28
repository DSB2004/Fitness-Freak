import React from 'react'
import { useSelector } from 'react-redux'
import FeatureCard from '../../layouts/feature-card/feature-card'

export default function Index() {
    const features = useSelector(state => state.Feature.featureList)
    return (
        <section className='dashboard-index'>
            <h1 className='dashboard-heading uppercase'>Discover several Fitness Options</h1>
            <article className='flex-left flex-wrap dashboard-article'>
                {features.length !== 0 ?
                    <>
                        {features.map(element => <FeatureCard content={element.data} key={element.id} />)}
                    </> :
                    <>
                        <FeatureCard key={1} />
                        <FeatureCard key={2} />
                        <FeatureCard key={3} />
                    </>}
            </article>
        </section >
    )
}
