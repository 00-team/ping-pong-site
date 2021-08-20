import React, { useEffect, useState } from 'react'

import { SliderData } from '../elements/SliderData'
import StudentSlider from '../elements/studentSlider'

// css
import "./sass/students.scss"

const Students = (props) => {


    return (
        <div className='students'>
            <h1
                className='fa center'
                id='students'
                style={{ textAlign: 'center' }}
            >
                شاگردان محمود ریزبند
            </h1>
            <div className='students_vids container'>
                {/* <StudentSlider slides={SliderData} /> */}
            </div>
        </div>
    )
}

export default Students
