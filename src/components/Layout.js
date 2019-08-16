import React from 'react'
import theme from '../../config/theme'
import Header from './Header'
import styled, {ThemeProvider} from 'styled-components'
import GlobalStyle from '../styles/global'

import './custom-medium-zoom/mediumZoomStyles.css'

const Wrapper = styled.div`
  margin-bottom: 2rem;
`

const Layout = ({children}) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Header/>
          {children}
        </Wrapper>
      </ThemeProvider>
      <GlobalStyle theme={theme}/>
    </>
  )
}

export default Layout
