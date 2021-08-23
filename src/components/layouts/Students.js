import React, { useState, useEffect, useRef } from 'react'

// redux
import { useSelector } from 'react-redux'

// icons
import { CgClose } from 'react-icons/cg'

// functions
import AutoScroll from '../functions/AutoScroll'

// common
import Button from '../common/Button'

// style
import './sass/students.scss'

// files
import videoFile from '../../static/videos/students.mp4'

const Students = () => {
    const studentContainer = useRef(null)
    const [scrolling, setScrolling] = useState(true)
    const [showVideo, setShowVideo] = useState(false)

    const [studentInitList, setSIL] = useState([
        {
            id: 1,
            img: 'https://cdn.discordapp.com/attachments/731174051170746500/836798695139573840/007_logo_f27.png',
            year: 2019,
        },
        {
            id: 2,
            img: 'https://cdn.discordapp.com/attachments/731174051170746500/808355617441710130/mars-planet-vector-13949696.jpg',
            year: 2021,
        },
    ])

    const [studentList, setStudentList] = useState({
        list1: [],
        list2: [],
    })

    const Locale = useSelector(state => state.Locale.localeData)
    const [studentsData, setStudentData] = useState({
        title: '',
        button: '',
    })

    // locale + student data
    useEffect(() => {
        if (Locale) setStudentData(Locale.text.students)
        if (
            typeof Locale.text.students.studentList === 'object' &&
            Locale.text.students.studentList
        ) {
            let Stud = []
            Locale.text.students.studentList.forEach(s => {
                let sf = studentInitList.find(i => i.id === s.id)
                if (sf) Stud.push({ ...sf, ...s })
            })
            setSIL(Stud)
        }
    }, [Locale])

    // student data
    useEffect(() => {
        let list1 = []
        let list2 = []

        if (studentInitList.length)
            if (studentInitList[0].name) {
                studentInitList.forEach((sil, index) => {
                    if (index % 2 === 0) {
                        list1.push(sil)
                    } else {
                        list2.push(sil)
                    }
                })

                setStudentList({ list1: list1, list2: list2 })
            }
    }, [studentInitList])

    // scroll animation
    useEffect(() => {
        let autoScrollInterval
        if (studentContainer.current && scrolling) {
            autoScrollInterval = AutoScroll(studentContainer.current, 'left')
        } else {
            clearInterval(autoScrollInterval)
        }
        return () => {
            clearInterval(autoScrollInterval)
        }
    }, [studentContainer, scrolling])

    return (
        <div className='students-container' id='students'>
            <div className='students'>
                <h2 style={{ direction: Locale.direction }}>
                    {studentsData.title}
                </h2>
                <div
                    className='student-container'
                    ref={studentContainer}
                    onMouseEnter={e => setScrolling(false)}
                    onMouseLeave={e => setScrolling(true)}
                >
                    <div className='col'>
                        {studentList.list1.map((s, i) => (
                            <div key={i} className='student'>
                                <div
                                    className='pic'
                                    style={{ backgroundImage: `url(${s.img})` }}
                                ></div>
                                <div
                                    className='bio'
                                    style={{ direction: Locale.direction }}
                                >
                                    <span className='name'>{s.name}</span>
                                    <span className='description'>
                                        {s.description}
                                    </span>
                                    <span className='year'>{s.year}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='col'>
                        {studentList.list2.map((s, i) => (
                            <div key={i} className='student'>
                                <div
                                    className='pic'
                                    style={{ backgroundImage: `url(${s.img})` }}
                                ></div>
                                <div
                                    className='bio'
                                    style={{ direction: Locale.direction }}
                                >
                                    <span className='name'>{s.name}</span>
                                    <span className='description'>
                                        {s.description}
                                    </span>
                                    <span className='year'>{s.year}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Button onClick={e => setShowVideo(true)}>{studentsData.button}</Button>
            </div>

            {showVideo && (
                <div className='video-container'>
                    <div className='close' onClick={e => setShowVideo(false)}>
                        <CgClose />
                    </div>
                    <div className='video'>
                        <video src={videoFile} controls></video>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Students
