import React, { createRef }from 'react'
import Img from 'gatsby-image'
import {ImageMap} from "./contexts/image-map-context"
const uuidv4 = require('uuid/v4');

const Image = ({ imageName, width = "100%", margin = 1 }) => {
  return (
    <ImageMap.Consumer>
      {
        (imageMap) => {
          const image = imageMap[imageName]
          if(!image) {
            console.error(`Unable to find image ${imageName}`)
            return null;
          }

          const {lowRes, highRes} = image
          const ref = createRef()

          return (
            <Img
              ref={ref}
              className={`image-${uuidv4()}`}
              fluid={lowRes}
              onLoad={() => {
                const img = ref.current.imageRef.current
                img.setAttribute('data-srcset-hd', highRes.srcSet);
                img.setAttribute('data-sizes-hd', highRes.sizes);

                img.style.transition = ""; // Hack that prevents image from closing
                window.zoomer.attach(img);
              }}
              style={{
                width: width,
                display: "inline-block",
                verticalAlign: "middle",
                margin: margin
              }}/>
          )
        }
      }
    </ImageMap.Consumer>
  )
}

export default Image
