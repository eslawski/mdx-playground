import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    font-size: 110%;
    line-height: 1.75rem;
    
      @media screen and (min-width: 600px) {
        font-size: 120%;
        line-height: 2rem;
      }
  }
  
  p {
    color: rgba(0,0,0,.8);
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

header div a:hover {
  background-color: green;
}
  
`
export default GlobalStyle