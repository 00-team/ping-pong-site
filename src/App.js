import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

// redux
import { Provider as ReduxProvider, useSelector, useDispatch } from 'react-redux'
import store from './database/store'
import { SET_SIZE } from './database/reducers/base/types'

// components
import Navbar from './components/layouts/Navbar'
import Intro from './components/layouts/Intro'
import About from './components/layouts/About'
import Glories from './components/layouts/Glories'
import Students from './components/layouts/Students'
import Footer from './components/layouts/Footer'

// style
import './components/sass/base.scss'

const App = () => {
    const dispatch = useDispatch()
    const Locale = useSelector(state => state.Locale)

    useEffect(() => {
        if (Locale)
            if (Locale.localeData) {
                document.body.className = Locale.localeData.direction
            }
    }, [Locale])

    useEffect(() => {
        window.onresize = () => {
            dispatch({ type: SET_SIZE, payload: window.innerWidth })
        }
        return () => {
            window.onresize = null
        }
    }, [dispatch])

    return (
        <>
            <Navbar />
            <Intro />
            <About />
            <Glories />
            <Students />
            <Footer />
        </>
    )
}

export default App

const Root = () => {
    return (
        <ReduxProvider store={store}>
            <App />
        </ReduxProvider>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'))
