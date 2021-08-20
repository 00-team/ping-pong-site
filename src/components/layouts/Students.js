import React, { useState, useEffect, useRef } from 'react'

// functions
import AutoScroll from '../functions/AutoScroll'

// style
import './sass/students.scss'

const Students = () => {
    const studentContainer = useRef(null)
    const [scrolling, setScrolling] = useState(true)

    const stodents = [
        {
            id: 1,
            name: 'Student 1',
            description: 'a random dude in asia, win wrold champ xD',
            img: 'https://media.istockphoto.com/photos/asian-guy-playing-table-tennis-picture-id889418740?s=612x612',
        },
        {
            id: 2,
            name: 'Student 2',
            description: 'a random dude in asia, win wrold champ xD',
            img: 'https://img.freepik.com/free-photo/confident-young-pretty-sporty-girl-wearing-headband-wristband-holding-ping-pong-rackets-isolated-blue-wall-with-copy-space_141793-101372.jpg?size=626&ext=jpg&ga=GA1.2.357280364.1626393600',
        },
        {
            id: 3,
            name: 'Student 3',
            description:
                'a random dude in asia, win wrold champ xD a random dude in asia, win wrold champ xD a random dude in asia, win wrold champ xD a random dude in asia, win wrold champ xD',
            img: 'https://previews.123rf.com/images/zoomteam/zoomteam1203/zoomteam120300278/12763547-sexy-sports-girl-plays-table-tennis.jpg',
        },
    ]

    const stodents2 = [
        {
            id: 1,
            name: 'Student 1',
            description: 'a random dude in asia, win wrold champ xD',
            img: 'https://media.istockphoto.com/photos/asian-guy-playing-table-tennis-picture-id889418740?s=612x612',
        },
        {
            id: 2,
            name: 'Student 2',
            description: 'a random dude in asia, win wrold champ xD',
            img: 'https://img.freepik.com/free-photo/confident-young-pretty-sporty-girl-wearing-headband-wristband-holding-ping-pong-rackets-isolated-blue-wall-with-copy-space_141793-101372.jpg?size=626&ext=jpg&ga=GA1.2.357280364.1626393600',
        },
        {
            id: 3,
            name: 'Student 3',
            description:
                'a random dude in asia, win wrold champ xD a random dude in asia, win wrold champ xD a random dude in asia, win wrold champ xD a random dude in asia, win wrold champ xD',
            img: 'https://previews.123rf.com/images/zoomteam/zoomteam1203/zoomteam120300278/12763547-sexy-sports-girl-plays-table-tennis.jpg',
        },
    ]

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
                <h2>Students</h2>
                <div
                    className='student-container'
                    ref={studentContainer}
                    onMouseEnter={e => setScrolling(false)}
                    onMouseLeave={e => setScrolling(true)}
                >
                    <div className='col'>
                        {stodents.map((s, i) => (
                            <div key={i} className='student'>
                                <div
                                    className='pic'
                                    style={{ backgroundImage: `url(${s.img})` }}
                                ></div>
                                <div className='bio'>
                                    <span className='name'>{s.name}</span>
                                    <span className='description'>
                                        {s.description}
                                    </span>
                                    <span className='year'>2019</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='col'>
                        {stodents2.map((s, i) => (
                            <div key={i} className='student'>
                                <div
                                    className='pic'
                                    style={{ backgroundImage: `url(${s.img})` }}
                                ></div>
                                <div className='bio'>
                                    <span className='name'>{s.name}</span>
                                    <span className='description'>
                                        {s.description}
                                    </span>
                                    <span className='year'>2210</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Students
