import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
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