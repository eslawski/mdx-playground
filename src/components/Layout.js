import React from 'react'
import PropTypes from 'prop-types'

import theme from '../../config/theme'
import Header from './Header'
import {ThemeProvider} from 'styled-components'
import './custom-medium-zoom/mediumZoomStyles.css'
import GlobalStyle from '../styles/global'


class Layout extends React.Component {

  render() {
    const {children} = this.props;
    return (
      <>
        <ThemeProvider theme={theme}>
          <>
            <Header/>
            {children}
          </>
        </ThemeProvider>
        <GlobalStyle theme={theme}/>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
