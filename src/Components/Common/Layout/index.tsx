import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import NewNavbar from './NewNavbar';

const Layout = ({ children }: any) => {
    return (
        <section>
            <Navbar />
            {/* <NewNavbar /> */}
            {children}
            <Footer />
        </section>
    )
}

export default Layout;