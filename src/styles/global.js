import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    font-size: 120%;
    line-height: 2rem;
    text-rendering: optimizeLegibility;
    
      @media screen and (max-width: ${props => props.theme.breakpoints.phone}) {
        font-size: 110%;
        line-height: 1.75;
      }
  }
  
  body {
    margin: 0;
  }
  
  p, li, ul {
    color: rgba(0, 0, 0, .8);
  }

  .video-wrapper {
    position:relative;
    padding-bottom:56.25%;
    padding-top:30px;
    width: 100%;
    height: 100%;
    overflow:hidden;
    
    iframe, object, embeded {
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
    }
}

header div a {
  background-color: ${props => props.theme.colors.green};
  
  &:hover {
    color: black !important;
  }
}

blockquote {
  background: #f9f9f9;
  border-left: 10px solid #ccc;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  quotes: "\\201C""\\201D""\\2018""\\2019";
}
blockquote:before {
  color: #ccc;
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}
blockquote p {
  display: inline;
  font-style: italic;
}
  
`
export default GlobalStyle