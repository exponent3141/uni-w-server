import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} 
from 'react-router-dom'

import './style.css'
import Thirdwebstudio from './views/thirdwebstudio'
import NotFound from './views/not-found'
import { ParallaxProvider } from "react-scroll-parallax";

import { Navbar } from './navbar'


const App = () => {
  return (
    <div>
   
    
    <Router>
    <Navbar/>
      <Switch>
        <Route component={Thirdwebstudio} exact path="/" />
        <Route component={NotFound} path="/404" />
        <Redirect to="**" />
      </Switch>
    </Router></div>
  )
}



ReactDOM.render(<App />, document.getElementById('app'))
