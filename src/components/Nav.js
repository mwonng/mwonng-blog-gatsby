import React from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components';

const NavLiWrapper = styled.ul`
  list-style: none;
  text-align: right;
  margin-bottom: 0;

  & > li {
    display: inline-block;
    padding: 0 1rem;
    margin: 0.5rem 0;
  }
`

const Nav = () => {
  return(
    <div>
      <NavLiWrapper>
        <li>
          <Link
            style={{ boxShadow: 'none' }}
            to={'/#'}>
            About
          </Link>
        </li>
        <li>
          <Link
            style={{ boxShadow: 'none' }}
            to={'/portfolio'}>
            Portfolio
          </Link>
        </li>
      </NavLiWrapper>
    </div>
  )
}

export default Nav