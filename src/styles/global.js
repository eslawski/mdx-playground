import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    /* stylelint-disable-next-line */
    font: inherit;
    vertical-align: baseline;
  }
  /* Added to Fix Footer to bottom of viewport */
  html, body {
    height: 100%;
  }
  .siteRoot {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .siteContent {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
  }
  footer {
    width: 100%;
  }
  /* End Fix to Place Footer on Bottom of Viewport */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  @media screen and (min-width: 35em) {
    html {
      margin-right: calc(-100vw + 100%);
      overflow-x: hidden;
    }
  }
  blockquote, q {
    quotes: none;
  }
  blockquote::before, blockquote::after,
  q::before, q::after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    background: white;
    line-height: 1;
    font-size: 100%;
    font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  	-webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  img {
    display: block;
  	width: 100%;
  	height: auto;
  }
  button,
  input {
    font-family: inherit;
    font-size: inherit;
    background: none;
    border: none;
    outline: none;
    appearance: none;
    border-radius: 0;
    resize: none;
    &:focus {
      outline: none;
    }
    &:invalid {
      box-shadow: none;
    }
  }
  p {
    line-height: 1.6;
  }
  header ul li a:hover {
    background-color: green;
  }
  
  blockquote {
    font-size: 1.4em;
    width: 60%;
    margin: 50px auto;
    font-style: italic;
    color: #555555;
    padding: 1.2em 30px 1.2em 75px;
    border-left: 8px solid green;
    line-height: 1.6;
    position: relative;
    background: #EDEDED;
    
    &::before {
      content: "\\201C";
      color: green;
      font-size: 4em;
      position: absolute;
      left: 10px;
      top: -10px;
    }
  }
  strong {
    font-weight: bold;
  }
  h4 {
    font-size: 1.15em;
    font-weight: bold;
    margin-bottom: 5px;
  }
  ul li {
    list-style-position: inside;
  }
  
`
export default GlobalStyle