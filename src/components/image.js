import React from 'react'
import Img from 'gatsby-image'
import {ImageMap} from "./image-map-context"

const Image = ({ imageName }) => {
  return (
    <ImageMap.Consumer>
      {
        (imageMap) => {
          const image = imageMap[imageName]
          if(!image) {
            console.error(`Unable to find image ${imageName}`)
            return null;
          }

          const {id, lowRes, highRes} = image;
          return (
            <div style={{width: 300}}>
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
          )
        }
      }
    </ImageMap.Consumer>
  )
}

export default Image
