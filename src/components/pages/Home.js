import React from 'react'

// components
import ImgSlider from '../layouts/ImgSlider'
import About from '../layouts/About'
import Contact from '../layouts/Contact'

function Home() {
    return (
        <div className="home">
                <ImgSlider />
                <About />
            <Contact />
        </div>
    )
}

export default Home
