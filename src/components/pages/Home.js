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

function Home() {
    return (
      <div className="home">
        {/* <ImgSlider /> */}
        <HeroSection />

        <About />

        <Students />

        <Contact />

        <Footer />

        {/* <Rackets /> */}
      </div>
    );
}

export default Home
