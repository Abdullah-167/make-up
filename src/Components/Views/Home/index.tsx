import Layout from '@/Components/Common/Layout'
import React from 'react'
import Hero from './Hero'
import SkinCare from './SkinCare'
import LatestBlog from './LatestBlog'
import OurToppic from './OurToppic'
import Video from './Video'
import LifeHack from './LifeHack'
import Instagram from '@/Components/Common/Instagram'
import NewsLetter from '@/Components/Common/NewsLetter'
import Blog from './Blogs'
import Cards from './Cards'

const Home = () => {
    return (
        <Layout>
            <Hero />
            <SkinCare />
            <LatestBlog />
            <OurToppic />
            <Cards />
            <Blog />
            {/* <Video /> */}
            <LifeHack />
            <div className="max-w-[400px] movie--isloading mx-auto">
                <div className="loading-image"></div>
                <div className="loading-content">
                    <div className="loading-text-container">
                        <div className="loading-category"></div>
                        <div className="loading-main-text"></div>
                        <div className="loading-sub-text"></div>
                        <div className='flex gap-2 items-center'>
                            <div className="loading-author-name"></div>
                            <div className='loading-qoma'></div>
                            <div className="loading-date"></div>
                        </div>
                    </div>
                </div>
            </div>
            <Instagram />
        </Layout>
    )
}

export default Home


const items = ['Slide 1', 'Slide 2', 'Slide 3'];