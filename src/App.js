import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home.js'
import Games from './Games'
import Stocks from './Stocks'
import './App.css'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Stocks />
        {/* <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/games' component={Games} />
        </Switch> */}
      </React.Fragment>
    )
  }
}

export default App
