import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import NewNavbar from './NewNavbar';
import NewsLetter from '../NewsLetter';
import ProgressBar from './ProgressBar';

const Layout = ({ children }: any) => {
    return (
        <section className=''>
            <Navbar />
            {/* <ProgressBar /> */}
            {children}
            <NewsLetter />
            <Footer />
        </section>
    )
}

export default Layout;