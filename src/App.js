import React from 'react'
import ReactDOM from 'react-dom'

// redux
import { Provider as ReduxProvider, useDispatch, useSelector } from 'react-redux';
import store from './database/store';

// components


// style
import './components/sass/base.scss'

const App = () => {
    const dispatch = useDispatch()
    const currentLocale = useSelector(state => state.Locale.locale)
    
    console.log(currentLocale);

    
    return (
        <>App</>
    )
}

export default App


const Root = () => {
    return (
        <ReduxProvider store={store}>
            <App/>
        </ReduxProvider>
    )
}

ReactDOM.render(<Root/>, document.getElementById('root'))
