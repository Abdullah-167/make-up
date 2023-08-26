import Layout from '@/Components/Common/Layout'
import React from 'react'
import Hero from './Hero'
import SkinCare from './SkinCare'
import LatestBlog from './LatestBlog'
import OurToppic from './OurToppic'
import Video from './Video'
import LifeHack from './LifeHack'

const Home = () => {
    return (
        <Layout>
            <Hero />
            <SkinCare />
            <LatestBlog />
            <OurToppic />
            <Video />
            <LifeHack />
        </Layout>
    )
}

export default Home