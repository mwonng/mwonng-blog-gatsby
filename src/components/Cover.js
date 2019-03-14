import styled from 'styled-components';


export const Cover = styled.figure`
  /* background: #3498db; */

  position: relative;
  float: left;
  overflow: hidden;
  margin: 10px 1%;
  min-width: 320px;
  max-width: 600px;
  max-height: 300px;
  width: 100%;
  height: auto;
  background: #3085a3;
  text-align: center;
  border-radius: 8px;
  border: 1px solid #ddd;
  cursor: pointer;

  & figcaption {
    padding: 2em;
    color: #fff;
    font-size: 1.25em;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  & figcaption::before,
  & figcaption::after {
    pointer-events: none;
  }

  & figcaption,
  & figcaption > a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  /* Anchor will cover the whole item by default */
  /* For some effects it will show as a button */
  & figcaption > a {
    z-index: 1000;
    text-indent: 200%;
    white-space: nowrap;
    font-size: 0;
    opacity: 0;
  }

  & h2 {
    /* word-spacing: -0.15em; */
    font-weight: 300;
  }

  & ul {
    /* word-spacing: -0.15em; */
    list-style: none;

    & > li {
      margin-bottom: 0;
    }
  }

  & h2 span {
    font-weight: 800;
  }

  & h2,
  & p {
    margin: 0;
  }

  & p {
    letter-spacing: 1px;
    font-size: 68.5%;
  }

  & img {
    position: relative;
    display: block;
    min-height: 100%;
    max-width: 100%;

    opacity: 0.99;
    filter: grayscale(0.2);
    -webkit-transform: scale3d(1,1,1);
    transform: scale3d(1,1,1);
  }

  & figcaption::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.5);
    content: '';
    -webkit-transition: -webkit-transform 0.6s;
    transition: transform 0.6s;
    -webkit-transform: scale3d(2.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,-100%,0);
    transform: scale3d(2.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,-100%,0);
  }

  & p {
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 3em;
    padding: 0 1em;
    max-width: 150px;
    border-right: 4px solid #fff;
    text-align: right;
    opacity: 0;
    -webkit-transition: opacity 0.35s;
    transition: opacity 0.35s;
  }

  & h2 {
    opacity: 0;
    color: #fff;
    text-align: left;
    /* text-align: right; */

  }

  &:hover img {
    opacity: 0.4;
    filter: blur(2px);
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: scale3d(1.05,1.05,1);
    transform: scale3d(1.05,1.05,1);
  }

  &:hover figcaption::before {
    -webkit-transform: scale3d(2.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,100%,0);
    transform: scale3d(2.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,100%,0);
  }

  &:hover p {
    opacity: 1;
    -webkit-transition-delay: 0.1s;
    transition-delay: 0.1s;
  }

  &:hover h2 {
    opacity: 1;
    -webkit-transition-delay: 0.1s;
    transition-delay: 0.1s;
  }
`