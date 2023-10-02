import Layout from '@/Components/Common/Layout'
import React from 'react'
import Hero from './Hero'
import WhoWeAre from './WhoWeAre'
import OurMission from './OurMission'
import Cards from '../Home/Cards'
import LatestBlog from '../Home/LatestBlog'
import Instagram from '@/Components/Common/Instagram'

const About = () => {
    return (
        <Layout>
            <Hero />
            <WhoWeAre />
            <OurMission />
            <Cards />
            <LatestBlog />
            <Instagram />
        </Layout>
    )
}

export default About