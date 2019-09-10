import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from './me.jpg'

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
        <Link to='/'>
          <i className='fas fa-home nav-link'> Home</i>
        </Link>
        <Link to='/stocks'>
          <i className='fas fa-chart-line nav-link'> Game</i>
        </Link>
        <span title='My Portfolio'>
          <a
            href='https://nathantbissell.github.io/Portfolio/'
            rel='noopener noreferrer'
            target='_blank'
          >
            <img src={logo} alt='me' className='logo' />
          </a>
        </span>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  background: var(--darkGrey);
  justify-content: space-evenly;
  .nav-link {
    justify-content: space-between;
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    // 1rem = 16px, if user changes size of site, will respond accordingly
    // important is called here cause navlink is a boostrap method that needs overriding
    text-transform: capitalize;
  }
  .nav-link:hover {
    color: var(--mainGrey) !important;
    transition: all 0.5s ease-in-out;
  }
  .logo {
    float: right;
    right: 3vh;
    margin: 0px;
    padding: 0px;
    border-radius: 50%;
    height: 50px;
    width: 50px;
  }
`
