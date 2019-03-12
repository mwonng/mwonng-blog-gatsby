import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'
import {LayoutWrapper} from '../components/layout'
import {HeadingOne, HeadingThree} from '../components/elements/Headings';
import styled from 'styled-components';
// import mdtImage from '../assets/images/portfolio/mdt.png'
import fengyiImage from '../assets/images/portfolio/fengyi.png'
import hkabaImage from '../assets/images/portfolio/hkaba.png'
import licheeImage from '../assets/images/portfolio/lichee.png'
import daikeImage from '../assets/images/portfolio/daike.png'
import weyouImage from '../assets/images/portfolio/weyou.png'
import aceworldImage from '../assets/images/portfolio/aceworld.png'


const PortfolioImg = styled.img`
  max-width: 600px;
`
const UlCustom = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const List = styled.li`
  position: relative;
  width: 600px;
  height:300px;
  background-image: ${props => `url(${props.bgImage})`};
  background-size: 100% auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-bottom: 1.5rem;
`

const Overlayer = styled.div`
  background-color: rgba(0,0,0,0);
  opacity: 0;
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom: 0;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0,0,0,0.6);
    opacity: 1;
  }
`

const OverlayerTexr = styled.div`
  text-align: left;
  color:#ddd;
  margin-top:1rem;
  margin-left: 1rem;
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
          <List bgImage={weyouImage}>
            <Overlayer>
              <OverlayerTexr>Weyou booking system</OverlayerTexr>
              <OverlayerTexr>Website: www.weyou.com.au</OverlayerTexr>
              <OverlayerTexr>Tech: Node.js, React, GraphQL, MongoDB, Next.js</OverlayerTexr>
            </Overlayer>
          </List>
          <List bgImage={aceworldImage}>
            <Overlayer>
              <OverlayerTexr>Aceworld homepage</OverlayerTexr>
              <OverlayerTexr>Website: www.aceworld.com.au</OverlayerTexr>
              <OverlayerTexr>Tech: webflow, Ruby on Rails</OverlayerTexr>
            </Overlayer>
          </List>
          <List bgImage={daikeImage}>
            <Overlayer>
              <OverlayerTexr>Daike</OverlayerTexr>
              <OverlayerTexr>Website: www.getdaike.com</OverlayerTexr>
              <OverlayerTexr>Tech: React, Redux, Ruby on Rails, RESTful API, PostgreSQL, UI, UX</OverlayerTexr>
            </Overlayer>
          </List>
          <List bgImage={licheeImage}>
            <Overlayer>
              <OverlayerTexr>Lichee order manage</OverlayerTexr>
              <OverlayerTexr>Website: www.lichee.io</OverlayerTexr>
              <OverlayerTexr>Tech: Ruby on Rails, RESTful API, PostgreSQL, React, GraphQL</OverlayerTexr>
            </Overlayer>
          </List>
          <List bgImage={hkabaImage}>
            <Overlayer>
              <OverlayerTexr>HKABA membership system</OverlayerTexr>
              <OverlayerTexr>Website: www.hkaba.com.au</OverlayerTexr>
              <OverlayerTexr>Tech: Ruby on Rails, PostgreSQL</OverlayerTexr>
            </Overlayer>
          </List>
          <List bgImage={fengyiImage}>
            <Overlayer>
              <OverlayerTexr>Fengyi ecommerce</OverlayerTexr>
              <OverlayerTexr>Website: www.fengyi.com.au</OverlayerTexr>
              <OverlayerTexr>Tech: Ruby on Rails, RESTful API, PostgreSQL, React, GraphQL</OverlayerTexr>
            </Overlayer>
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