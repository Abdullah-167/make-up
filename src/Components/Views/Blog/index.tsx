import Layout from '@/Components/Common/Layout'
import React from 'react'
import SideBar from './SideBar'
import BlogCards from './BlogCards'

const Blog = () => {
  return (
    <Layout>
      <div className=''></div>
      <p className='text-3xl sm:text-5xl font-semibold sm:text-center pb-12 px-4'>Our Latest <span className='text-tertiary'> {`Artile's`} </span></p>
      <BlogCards />
    </Layout>
  )
}

export default Blog