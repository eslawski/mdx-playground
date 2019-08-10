import React from 'react'
import Img from 'gatsby-image'
import {ImageMap} from "./image-map-context"
const uuidv4 = require('uuid/v4');

const Image = ({ imageName, width = 300, padding = 1 }) => {
  return (
    <ImageMap.Consumer>
      {
        (imageMap) => {
          const image = imageMap[imageName]
          if(!image) {
            console.error(`Unable to find image ${imageName}`)
            return null;
          }

          const {lowRes, highRes} = image,
                id = uuidv4();

          return (
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
              }}
              style={{
                width: width,
                display: "inline-block",
                verticalAlign: "middle",
                margin: padding
              }}/>
          )
        }
      }
    </ImageMap.Consumer>
  )
}

export default Image
