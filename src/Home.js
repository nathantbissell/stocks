import React, { Component } from 'react'
import { Switch, Route, Link, HashRouter } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import Stocks from './Stocks'

export default class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <h1 className='mt-5'>Stocks Homepage</h1>
        <Link to='/stocks' className='nav-link'>
          <Button variant='dark'>Stocks</Button>
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
