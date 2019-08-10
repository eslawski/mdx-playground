import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'

import theme from '../../config/theme'
import Header from './header'
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components'
import './layout.css'
import './custom-medium-zoom/mediumZoomStyles.css'


class Layout extends React.Component {
  componentDidMount() {
      console.log("LAYOUT MOUNTED");
    // Gatsby weirdness: Must skip this when gatsby is building as it's only used by browser.
    // See https://github.com/gatsbyjs/gatsby/issues/13355

  }

  render() {
    const {children} = this.props;
    return (
      <ThemeProvider theme={theme}>
        <>
          <div>
            {children}
          </div>
        </>
      </ThemeProvider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
