import React from 'react'
import Hero from './Hero'
import Layout from '@/Components/Common/Layout'
import Form from './Form'
import Cards from '../Home/Cards'
import LatestBlog from '../Home/LatestBlog'
import Instagram from '@/Components/Common/Instagram'

const Contact = () => {
    return (
        <Layout>
            <Hero />
            <Form />
            {/* <LatestBlog /> */}
            <Instagram />
        </Layout>
    )
}

export default Contact