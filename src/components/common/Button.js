import React from 'react'

// style
import './sass/button.scss'

const Button = ({ children, onClick }) => {
    return (
        <button className='button' onClick={e => onClick(e)}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    children: '',
    onClick: () => {},
}

export default Button
