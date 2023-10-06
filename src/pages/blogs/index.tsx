import Seo from '@/Components/Common/Seo'
import Blog from '@/Components/Views/Blog'
import React from 'react'

const index = () => {
  return (
    <main>
      <Seo title={'Blogs Evoc Beauty'} description ={`Evoce Beauty's Blog Page `}/>
      <Blog />
    </main>
  )
}

export default index