import React from 'react'

// components
// import ImgSlider from '../layouts/ImgSlider'
import Rackets from '../layouts/Rackets'

// sections 
import HeroSection from '../layouts/HeroSection'
import About from '../layouts/About'
import Contact from '../layouts/Contact'
import Students from '../layouts/Students'
import Footer from '../layouts/Footer'
import Bio from '../layouts/Bio'

function Home() {
    return (
        <div className='home'>
            {/* <ImgSlider /> */}
            <HeroSection />
            <h1 className='fa center topic' >محمود ریزبند</h1>
            <Bio />

            <About />

            <Students />

            <Contact />

            <Footer />

            {/* <Rackets /> */}
        </div>
    )
}

export default Home
