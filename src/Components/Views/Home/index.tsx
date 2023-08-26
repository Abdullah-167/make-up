import Layout from '@/Components/Common/Layout'
import React from 'react'
import Hero from './Hero'
import SkinCare from './SkinCare'
import LatestBlog from './LatestBlog'
import OurToppic from './OurToppic'
import Video from './Video'
import LifeHack from './LifeHack'
import Instagram from '@/Components/Common/Instagram'
import Carlsile from './Carlisle'

const Home = () => {
    return (
        <Layout>
            <Hero />
            <SkinCare />
            <LatestBlog />
            <OurToppic />
            <Video />
            <LifeHack />
            <Instagram />
            <Carlsile />
        </Layout>
    )
}

export default Home


const items = ['Slide 1', 'Slide 2', 'Slide 3'];