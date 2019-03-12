import React from 'react'
import styled from 'styled-components';

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './avatarM.png'
import { rhythm } from '../utils/typography'

const Avatar = styled.img`
  border-radius: 50%;
`

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <Avatar
          src={profilePic}
          alt={`Michael Wonng`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Michael H Wonng</strong>, A husband, father, programmer who lives and works in Melbourne.{' '}
          <a href="https://twitter.com/mwonng">
            follow me on twitter.
          </a> <br/>
          Looking for some more? Have a glance{' '}
          <a href="https://twitter.com/mwonng">
            portfolio
          </a>.
        </p>
      </div>
    )
  }
}

export default Bio
