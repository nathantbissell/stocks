import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <h1 className='mt-5'>Stocks Yo</h1>
        <Link to='/games' className='nav-link'>
          <Button variant='dark'>Games</Button>
        </Link>
        <Link to='/stocks' className='nav-link'>
          <Button variant='dark'>Stocks</Button>
        </Link>
      </HomeWrapper>
    )
  }
}

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`
