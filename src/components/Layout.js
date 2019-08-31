import React from 'react'
import theme from '../../config/theme'
import Header from './Header'
import styled, {ThemeProvider} from 'styled-components'
import GlobalStyle from '../styles/global'

import './custom-medium-zoom/mediumZoomStyles.css'

const Wrapper = styled.div`
  margin-bottom: 2rem;
`

const Footer = styled.div`
  text-align: center;
`

const Layout = ({children}) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Header/>
          {children}
          <Footer>
            <p>
              &copy; 2019 Evan Slawski. Built using GatsbyJS.{" "}
              <a href="https://github.com/eslawski/personal-website">Github</a>
            </p>
          </Footer>
        </Wrapper>
      </ThemeProvider>
      <GlobalStyle theme={theme}/>
    </>
  )
}

export default Layout
