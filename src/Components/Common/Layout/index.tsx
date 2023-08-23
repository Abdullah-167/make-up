import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }: any) => {
    return (
        <section>
            <Navbar />
            {children}
            <Footer />
        </section>
    )
}

export default Layout;