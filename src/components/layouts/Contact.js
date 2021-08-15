import React from "react";

import { Link } from "react-router-dom";

// css
import "./sass/contact.scss";

const Contact = () => {
  return (
      <div className='contact'>
          <div className='about'>
              <div className='cards'>
                  <h1
                      className='fa center'
                      id='glories'
                      style={{ textAlign: 'center' }}
                  >
                      تماس با ما
                  </h1>
              </div>
          </div>
      </div>
  )
}

export default Contact;



