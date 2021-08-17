import React, { useEffect } from 'react'

// video player
import plyr from 'plyr'
import 'plyr-react/dist/plyr.css'

// video player styling
import 'plyr-react/dist/plyr.css'

// css
import './sass/students.scss'

// video 
import video from '../../static/vid/hero.mp4'



const Students = (props) => {

    
    useEffect(() => {
        var player = new plyr('.js-plyr', props.options)
        player.source = props.sources
    }, [])

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
                <div className='player-wrapper'>
                    <video className='js-plyr plyr'></video>
                </div>
            </div>
        </div>
    )
}

export default Students


Students.defaultProps = {
    options: {
        controls: [
            'rewind',
            'play',
            'fast-forward',
            'progress',
            'current-time',
            'duration',
            'mute',
            'volume',
            'settings',
            'fullscreen',
        ],
        i18n: {
            restart: 'Restart',
            rewind: 'Rewind {seektime}s',
            play: 'Play',
            pause: 'Pause',
            fastForward: 'Forward {seektime}s',
            seek: 'Seek',
            seekLabel: '{currentTime} of {duration}',
            played: 'Played',
            buffered: 'Buffered',
            currentTime: 'Current time',
            duration: 'Duration',
            volume: 'Volume',
            mute: 'Mute',
            unmute: 'Unmute',
            enableCaptions: 'Enable captions',
            disableCaptions: 'Disable captions',
            download: 'Download',
            enterFullscreen: 'Enter fullscreen',
            exitFullscreen: 'Exit fullscreen',
            frameTitle: 'Player for {title}',
            captions: 'Captions',
            settings: 'Settings',
            menuBack: 'Go back to previous menu',
            speed: 'Speed',
            normal: 'Normal',
            quality: 'Quality',
            loop: 'Loop',
        },
    },
    sources: {
        type: 'video',
        sources: [
            {
                src: video,
                type: 'video/mp4',
            },
        ],
    },
}