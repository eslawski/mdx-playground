import React from 'react'
import Image from "./Image"
import {ImageMap} from "./contexts/image-map-context"



const ImageGrid = ({imageNames, columns = 4, spacing = 1, width = "100%"}) => {
  return (
    <div style={{width: width}}>
      <ImageMap.Consumer>
        {
          (imageMap) => {

            const images = imageNames.map(imageName => imageMap[imageName])
            const rows = [];

            for (let i = 0; i < images.length; i += columns) {
              rows.push(images.slice(i, i + columns))
            }

            return (
              <div>
                {
                  rows.map((row) => {
                    const rowAspectRatioSum = row.reduce((total, image) => total + image.lowRes.aspectRatio, 0);
                    return row.map((image, imageIndex) => {
                      const { lowRes } = image,
                            aspectRatio = lowRes.aspectRatio,
                            forceHighRes = aspectRatio > 2; // Special consideration for panos

                      let width = `calc(${(aspectRatio / rowAspectRatioSum)} * (100% - ${spacing*columns*2}px))`;
                      if (row.length === 1) {
                        // Edge case: adjust the width so the last image is not super blown up
                        width = `calc(100% / ${columns})`
                      }

                      return <Image
                                key={imageIndex}
                                imageName={image.lowRes.originalName}
                                width={width}
                                forceHighRes={forceHighRes}
                      />
                    })
                  })
                }
              </div>
            )
          }
        }
      </ImageMap.Consumer>
    </div>
    )
};
export default ImageGrid;
