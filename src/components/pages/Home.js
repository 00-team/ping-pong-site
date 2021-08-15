import React from 'react'

// components
import ImgSlider from '../layouts/ImgSlider'
import About from '../layouts/About'
import Rackets from '../layouts/Rackets'
import Contact from '../layouts/Contact'
import Footer from '../layouts/Footer'

function Home() {
    return (
      <div className="home">
        <ImgSlider />

        <About />

        <Contact />

        <Footer />

        <Rackets />
      </div>
    );
}

export default Home
