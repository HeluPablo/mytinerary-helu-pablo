import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AutoToTop from '../components/AutoToTop'


export default function Layout(props) {
    return (
        <div>
            <Navbar />
            {props.children}
            <Footer />
            <AutoToTop />
        </div>
    )
}
