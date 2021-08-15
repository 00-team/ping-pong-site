import React, { useState, useEffect } from 'react'

// redux
import { useSelector } from 'react-redux'

// locale
import locales from '../../locale.json'

// style
import './sass/about.scss'

// glories 
import Glories from './Glories'


// lower imgs 
import lower1 from '../../static/img/lower-1.jpg'
import lower2 from '../../static/img/lower-2.jpg'
import lower3 from '../../static/img/lower-3.jpg'
import lower4 from '../../static/img/lower-4.jpg'
import lower5 from '../../static/img/lower-5.jpg'
import lower6 from '../../static/img/lower-6.jpg'

const About = () => {
    const currentLocale = useSelector(state => state.Locale.locale)
    const [Locale, setLocale] = useState(null)

    useEffect(() => {
        // setLocale()
        locales.map(l => {
            if (l.locale === currentLocale) {
                setLocale({...l.text.about, direction: l.direction})
            }
        })
    }, [currentLocale])

    return (
      <div className="about">
        <div className="cards">
          <h1
            className="fa center"
            id="glories"
            style={{ textAlign: "center" }}
          >
            افتخارات
          </h1>
          <div className="cards__container">
            <div className="cards__wrapper">
              <ul className="cards__items">
                <Glories
                  src={lower1}
                  text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                  label="2005"
                  path="/"
                />

                <Glories
                  src={lower2}
                  text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                  label="2001"
                  path="/"
                />
              </ul>
              <ul className="cards__items" id="grid">
                <Glories
                  src={lower3}
                  text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                  label="2018"
                  path="/"
                />

                <Glories
                  src={lower4}
                  text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                  label="2018"
                  path="/"
                />

                <Glories
                  src={lower5}
                  text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                  label="1980"
                  path="/"
                />

                <Glories
                  src={lower6}
                  text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                  label="2015"
                  path="/"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;
