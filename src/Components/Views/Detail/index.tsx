import Layout from '@/Components/Common/Layout'
import React from 'react'
import PostDetail from './PostDetail'
import Data from './Data'
import Comment from '@/Components/Common/Comment'
import Instagram from '@/Components/Common/Instagram'

const Detail = () => {
    return (
        <Layout>
            <PostDetail />
            <Data />
            <Comment />
            <Instagram />
        </Layout>
    )
}

export default Detail