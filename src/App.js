import React from 'react'
import ReactDOM from 'react-dom'

// router
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';

// components

// style
import './components/sass/base.scss'

const App = () => {
    return (
        <>
            About Works Contact 
        </>
    )
}

export default App


const Root = () => {
    return (
        <Router>
            <App/>
        </Router>
    )
}

ReactDOM.render(<Root/>, document.getElementById('root'))
