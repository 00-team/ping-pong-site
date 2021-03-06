import React,{useEffect} from 'react'
import ReactDOM from 'react-dom'

// router 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// redux
import { Provider as ReduxProvider, useDispatch, useSelector } from 'react-redux';
import store from './database/store';

// components
import Home from './components/pages/Home';
import Navbar from './components/layouts/Navbar';
// import Navbar2 from './components/layouts/Navbar2';


// style
import './components/sass/base.scss'

const App = () => {
    const dispatch = useDispatch()
    const currentLocale = useSelector(state => state.Locale.locale)
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)


    return (
        <Router>
            {/* <Navbar /> */}
            <Switch>
                <Route path="/" component={Home} />               
            </Switch>
        </Router>
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
