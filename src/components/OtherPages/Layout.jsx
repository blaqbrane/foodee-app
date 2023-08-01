import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Layout = ({ children }) => {
    return (

        <div className='overflow-hidden'>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout