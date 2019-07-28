import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'


class Layout extends React.Component {
    componentDidMount() {
        // Gatsby weirdness: Must skip this when gatsby is building as it's only used by browser.
        // See https://github.com/gatsbyjs/gatsby/issues/13355
        try {
            console.log("width: " + Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
            console.log("pixel density: " + window.devicePixelRatio);
            import("medium-zoom").then(mediumZoom => {
                console.log("medium zoom loaded");
                console.log(mediumZoom);
                window.zoomer = mediumZoom.default();

            })
        } catch(e) {
            console.error(e);
        }
    }

    render() {
        const { children } = this.props;
        return (
            <StaticQuery
                query={graphql`
                  query SiteTitleQuery {
                    site {
                      siteMetadata {
                        title
                      }
                    }
                  }
                `}
                render={data => (
                    <>
                        <Header siteTitle={data.site.siteMetadata.title} />
                        <div
                            style={{
                                margin: '0 auto',
                                maxWidth: 960,
                                padding: '0px 1.0875rem 1.45rem',
                                paddingTop: 0,
                            }}
                        >
                            {children}
                        </div>
                    </>
                )}
            />
        )
    }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
