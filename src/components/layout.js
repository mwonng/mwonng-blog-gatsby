import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
import Nav from '../components/Nav'
import {HeadingOne, HeadingThree} from './elements/Headings';


class Template extends React.Component {
  render() {
    // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    const BlogHeader = ({data}) => {
      if (location.pathname === rootPath) {
        return(
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
              {data.site.siteMetadata.title}
            </Link>
          </HeadingOne>
          )
      } else {
        return(
          <HeadingThree
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
              {data.site.siteMetadata.title}
            </Link>
          </HeadingThree>
        )
      }
    }
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data =>
          <div
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: rhythm(24),
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }}
          >
            {/* <Nav /> */}
            <BlogHeader data={data} />
            {children}
          </div>
        }
      />
    )
  }
}

export default Template