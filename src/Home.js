import React, { Component } from 'react'
import { Switch, Route, Link, HashRouter } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import Stocks from './Stocks'

export default class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <h1 className='mt-5'>Bull Market</h1>
        <h4>About the game</h4>
        <h6>Objective: fill your bank account!</h6>
        <ul>
          <li>You have the option to buy or sell stock each day</li>
          <li>
            If you are satisfied with your turn, you can advance to the next day
          </li>
          <li>The stock value will increase or decrease randomly</li>
        </ul>
        <Link to='/stocks' className='nav-link'>
          <Button variant='dark'>Go to Game</Button>
        </Link>
      </HomeWrapper>
    )
  }
}

const HomeWrapper = styled.div`
  position: absolute;
  height: 1000px;
  width: 1000px;
  left: 50px;
`
