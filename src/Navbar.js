import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
        {/* https://www.iconfinder.com/icons/1243689/call_phone_icon Creative
          Commons (Attribution 3.0 Unported);
          https://www.iconfinder.com/Makoto_msk */}
        <Link to='/'>
          {/* <img src={logo} alt='store' className='navbar-brand' /> */}
          <i className='fas fa-home nav-link' />
        </Link>
        <ul className='navbar-nav align-items-center'>
          <li className='nav-item ml-5'>
            <Link to='/games' className='nav-link'>
              Game
            </Link>
          </li>
        </ul>
        <Link to='/cart' className='ml-auto' />
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  background: var(--navy);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    // 1rem = 16px, if user changes size of site, will respond accordingly
    // important is called here cause navlink is a boostrap method that needs overriding
    text-transform: capitalize;
  }
  .nav-link:hover {
    color: var(--lightBlue) !important;
    transition: all 0.5s ease-in-out;
  }
  .logo {
    left: 47%;
    position: absolute;
    height: 50px;
    width: 75px;
  }
`
