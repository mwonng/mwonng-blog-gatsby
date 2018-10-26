import React from 'react'
import { Link, graphql } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
import Nav from '../components/Nav'
import {HeadingOne} from './elements/Headings';


class Template extends React.Component {
  render() {
    // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const { location, children, siteTitle } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <HeadingOne
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {siteTitle}
          </Link>
        </HeadingOne>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {siteTitle}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {/* <Nav /> */}
        {header}
        {children}
      </div>
    )
  }
}

export default Template

export const layoutQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`