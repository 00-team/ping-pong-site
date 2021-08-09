// react
import React from 'react';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';

// pages
import Home from './Pages/Home';

// components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
      <Router>
            <Navbar  />
            <Switch>
                <Route path="/" exact> <Home   /> </Route>

            </Switch>
            <Footer />
      </Router>
  )
}

export default App
