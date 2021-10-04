import React, { useEffect, useState } from 'react'

// componenets
import Glories from './Glories'
import StudentSlider from '../elements/StudentSlider'

// css
import './sass/students.scss'

//
const Students = props => {
    return (
        <div className='students'>
            <h1
                className='fa center'
                id='students'
                style={{ textAlign: 'center' }}
            >
                شاگردان محمود ریزبند
            </h1>
            <div className='students_vids'>
                <StudentSlider />
            </div>
        </div>
    )
}

export default Students
