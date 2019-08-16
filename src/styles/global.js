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
  
  p {
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
  
`
export default GlobalStyle