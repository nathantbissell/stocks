import React, { Component } from 'react'
import { Switch, Route, Link, HashRouter } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home.js'
import Games from './Games'
import Stocks from './Stocks'
import './App.css'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/stocks' component={Stocks} />
        </Switch>
      </HashRouter>
    )
  }
}

export default App
