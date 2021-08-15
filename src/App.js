import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

// redux
import { Provider as ReduxProvider, useSelector } from 'react-redux'
import store from './database/store'

// components
import Intro from './components/layouts/Intro'
import Navbar from './components/layouts/Navbar'

// style
import './components/sass/base.scss'

const App = () => {
    const Locale = useSelector(state => state.Locale)

    useEffect(() => {
        if (Locale)
            if (Locale.localeData) {
                document.body.className = Locale.localeData.direction
            }
    }, [Locale])

    return (
        <>
            <Navbar />
            <Intro />
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
