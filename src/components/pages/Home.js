import React from 'react'

// components
import ImgSlider from '../layouts/ImgSlider'
import About from '../layouts/About'
import Contact from '../layouts/Contact'
import Rackets from '../layouts/Rackets'

function Home() {
    return (
        <div className="home">
            <ImgSlider    />
            <About        />
            <Contact      />
            <Rackets      />
        </div>
    )
}

export default Home
