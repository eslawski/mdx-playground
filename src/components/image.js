import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

class Image extends React.Component {
    render() {
        const { imageName } = this.props;
        return (
            <StaticQuery
                query={graphql`
      query {
        allImageSharp {
         edges {
             node {
                 id
                 lowRes: fluid(maxWidth: 700, quality: 65) {
                    ...GatsbyImageSharpFluid
                    originalName
                 }
                 highRes: fluid(maxWidth: 1000, quality: 80) {
                    srcSet
                    sizes
                    originalName
                 }
             }
           }
         }
      }
    `}
                render={data => {
                    console.log(imageName)
                    // TODO this approach seems a little unperformant. Maybe it happens at build time?
                    const imgEdge = data.allImageSharp.edges.find((edge) => {
                        return edge.node.lowRes.originalName === imageName;
                    });
                    console.log(imgEdge)
                    if(imgEdge) {
                        const { node: {lowRes, id, highRes}} = imgEdge;
                        return <div style={{width: 300}}>
                            <Img
                                className={`image-${id}`}
                                fluid={lowRes}
                                onLoad={() => {
                                    const img = document.querySelector(`.image-${id} picture img`);
                                    img.setAttribute('data-image-id', id);
                                    img.setAttribute('data-srcset-hd', highRes.srcSet);
                                    img.setAttribute('data-sizes-hd', highRes.sizes);

                                    img.style.transition = ""; // Hack that prevents image from closing
                                    window.zoomer.attach(img);

                                }}/>
                        </div>
                    }
                }}
            />
        )
    }
}
export default Image
