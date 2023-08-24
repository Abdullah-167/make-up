import Layout from '@/Components/Common/Layout'
import Home from '@/Components/Views/Home'
import Head from 'next/head'
import React from 'react'

const index = () => {
  return (
    <main>
      <Head>
        <title>
          Home
        </title>
        <link rel="shortcut icon" href="/favicon2.svg" type="image/x-icon" />
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
      </Head>
      <Home />
    </main>
  )
}

export default index