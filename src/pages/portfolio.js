import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'
import {LayoutWrapper} from '../components/layout'
import {HeadingOne, HeadingThree} from '../components/elements/Headings';
import styled from 'styled-components';
import fengyiImage from '../assets/images/portfolio/fengyi.png'
import hkabaImage from '../assets/images/portfolio/hkaba.png'
import licheeImage from '../assets/images/portfolio/lichee.png'
import daikeImage from '../assets/images/portfolio/daike.png'
import weyouImage from '../assets/images/portfolio/weyou.png'
import aceworldImage from '../assets/images/portfolio/aceworld.png'
import { Cover } from '../components/Cover'

const UlCustom = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const List = styled.li`
  position: relative;
  clear: both;
  margin: 0 auto;
  padding: 1em 0 1em;
  max-width: 1000px;
  list-style: none;
  text-align: center;
`

class Portfolio extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )


    return (
      <LayoutWrapper>
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
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Bio />
        <h2>Portfolio/Projects</h2>
        <UlCustom>
          <List>
            <Cover>
              <img src={weyouImage} alt="weyou"/>
              <figcaption>
                <h2><span>Booking system</span></h2>
                <p>
                  <ul>
                    <li>Node.js</li>
                    <li>React</li>
                    <li>GraphQL</li>
                    <li>MongoDB</li>
                    <li>Next.js</li>
                    <li>AWS</li>
                  </ul>
                </p>
                <a href="https://www.weyou.com.au/home" target="_blank"></a>
              </figcaption>
            </Cover>
          </List>
          <List>
            <Cover>
              <img src={aceworldImage} alt="aceworld"/>
              <figcaption>
                <h2><span>Homepage</span></h2>
                <p>
                  <ul>
                    <li>Webflow</li>
                    <li>Ruby on Rails</li>
                  </ul>
                </p>
                <a href="https://www.aceworld.com.au" target="_blank"></a>
              </figcaption>
            </Cover>
          </List>
          <List>
            <Cover>
              <img src={daikeImage} alt="getDaike"/>
              <figcaption>
                <h2><span>Customer service</span></h2>
                <p>
                  <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Ruby on Rails</li>
                    <li>RESTful API</li>
                    <li>PostgreSQL</li>
                    <li>UI/UX</li>
                  </ul>
                </p>
                <a href="https://www.getdaike.com" target="_blank"></a>
              </figcaption>
            </Cover>
          </List>
          <List>
            <Cover>
              <img src={licheeImage} alt="lichee.io"/>
              <figcaption>
                <h2><span>Order manage</span></h2>
                <p>
                  <ul>
                    <li>Ruby on Rails</li>
                    <li>RESTful API</li>
                    <li>PostgreSQL</li>
                    <li>React</li>
                    <li>GraphQL</li>
                  </ul>
                </p>
                <a href="https://www.lichee.io" target="_blank"></a>
              </figcaption>
            </Cover>
          </List>
          <List bgImage={hkabaImage}>
            <Cover>
              <img src={hkabaImage} alt="hkaba"/>
              <figcaption>
                <h2><span>Membership</span></h2>
                <p>
                  <ul>
                    <li>Ruby on Rails</li>
                    <li>PostgreSQL</li>
                  </ul>
                </p>
                <a href="https://www.hkaba.com.au" target="_blank"></a>
              </figcaption>
            </Cover>
          </List>
          <List bgImage={fengyiImage}>
            <Cover>
              <img src={fengyiImage} alt="fengyi"/>
              <figcaption>
                <h2><span>eCommerce</span></h2>
                <p>
                  <ul>
                    <li>Ruby on Rails</li>
                    <li>RESTful API</li>
                    <li>PostgreSQL</li>
                    <li>React</li>
                    <li>GraphQL</li>
                  </ul>
                </p>
                <a href="https://www.fengyi.com.au" target="_blank"></a>
              </figcaption>
            </Cover>
          </List>
        </UlCustom>
      </LayoutWrapper>
    )
  }
}

export default Portfolio

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`