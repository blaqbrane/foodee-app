import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import PopularDishes from './PopularDishes'
import Services from './Services'
import Category from './Category'
import Plans from './Plans'
import Testimonials from './Testimonials'
import TeamChef from './TeamChef'
import AppStore from './AppStore'
import Footer from './Footer'

const Home = () => {
    return (
        <div>
            <div>
                <Navbar />
                <Hero />
            </div>
            <PopularDishes />
            <Services />
            <Category />
            <Plans />
            <Testimonials />
            <TeamChef />
            <AppStore />

        </div>
    )
}

export default Home