import React from 'react'

// style
import './sass/footer.scss'

const Footer = () => {
    return (
        <div className='footer-container'>
            <footer>
                <span>
                    Ping Pong © | Site By{' '}
                    <span
                        className='creator'
                        onClick={e =>
                            window.open('https://discord.gg/Z6vgXHU2xQ')
                        }
                    >
                        00 Team
                    </span>
                </span>
            </footer>
        </div>
    )
}

export default Footer
