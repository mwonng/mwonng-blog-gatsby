import React from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components';

const NavLiWrapper = styled.ul`
  list-style: none;
  & > li {
    display: inline-block;
    padding: 0 1rem;
  }
`

const Nav = () => {
  return(
    <div>
      <NavLiWrapper>
        <li>
          <Link
            style={{ boxShadow: 'none' }}
            to={'/about'}>
            About
          </Link>
        </li>
        <li>
          <Link
            style={{ boxShadow: 'none' }}
            to={'/about'}>
            Contact
          </Link>
        </li>
      </NavLiWrapper>
    </div>
  )
}

export default Nav