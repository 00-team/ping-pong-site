import React from 'react'
import ReactDOM from 'react-dom'

// router
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';

// components
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Home from './components/pages/Home';

// cursor
import Cursor from './components/features/cursor';

// style
import './components/sass/base.scss'

const App = () => {
    return (
        <>
            <Cursor />
            <Navbar  />
            <Switch>
                <Route path="/" exact> <Home /> </Route>
            </Switch>
            
            <Footer />
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
