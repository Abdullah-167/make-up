import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import NewNavbar from './NewNavbar';
import NewsLetter from '../NewsLetter';

const Layout = ({ children }: any) => {
    return (
        <section className=''>
            <Navbar />
            {/* <NewNavbar /> */}
            {children}
            <NewsLetter />
            <Footer />
        </section>
    )
}

export default Layout;