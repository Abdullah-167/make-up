import Layout from '@/Components/Common/Layout'
import React from 'react'
import PostDetail from './PostDetail'
import Data from './Data'
import Comment from '@/Components/Common/Comment'
import Instagram from '@/Components/Common/Instagram'
import FaqSection from '@/Components/Common/Faq'
import Relevant from './Relevent'

const Detail = () => {
    return (
        <Layout>
            <PostDetail />
            <Data />
            <Comment />
            <div className='lg:hidden block'>
                <Relevant />
            </div>
            <Instagram />
        </Layout>
    )
}

export default Detail


