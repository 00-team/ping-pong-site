import React, { useEffect } from 'react'

// style 
import "./sass/rackets.scss"

function Rackets() {
    const amout = 100

    const getTop = () =>  { return Math.random()*500  }
    
    const getLeft = () => { return Math.random()*1000 }

    

    let top  = getTop() 
    let left = getLeft()

    return (
        <div className="rackets">
            <div className="racket" style={{top:top,left:left}}>random</div>
        </div>
    )
}

export default Rackets;
