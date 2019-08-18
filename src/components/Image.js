import React, { createRef }from 'react'
import Img from 'gatsby-image'
import {ImageMap} from "./contexts/image-map-context"

/**
 * Used for debugging purposes
 * @param img
 */
function showTimestampsDebug(img) {
  let debug = false;
  if (debug) {
    let div = document.createElement("div");
    div.style.color = "white"
    div.style.position = "relative"
    div.innerHTML = img.getAttribute("data-capture-date");
    img.parentElement.parentElement.appendChild(div);
  }
}

const Image = ({ imageName, width = "100%", margin = 1, forceHighRes = false }) => {
  return (
    <ImageMap.Consumer>
      {
        (imageMap) => {
          const image = imageMap[imageName]
          if(!image) {
            console.error(`Unable to find image ${imageName}`)
            return null;
          }

          let {lowRes, highRes} = image
          const ref = createRef()

          if(forceHighRes) {
            lowRes = highRes
          }

          return (
            <Img
              ref={ref}
              fluid={lowRes}
              onLoad={() => {
                const img = ref.current.imageRef.current
                img.setAttribute('data-srcset-hd', highRes.srcSet);
                img.setAttribute('data-sizes-hd', highRes.sizes);
                img.setAttribute('data-capture-date', image.captureDate)
                showTimestampsDebug(img)

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
