import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'

import theme from '../../config/theme'
import Header from './Header'
import styled, {ThemeProvider} from 'styled-components'
import './custom-medium-zoom/mediumZoomStyles.css'
import GlobalStyle from '../styles/global'


class Layout extends React.Component {
  componentDidMount() {
      console.log("LAYOUT MOUNTED");
    // Gatsby weirdness: Must skip this when gatsby is building as it's only used by browser.
    // See https://github.com/gatsbyjs/gatsby/issues/13355

  }

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
        <GlobalStyle/>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
