import React from 'react'
import Image from "./image"
import {ImageMap} from "./image-map-context"



const Grid = ({imageNames, columns = 3, padding = 1}) => {
  return (
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
                rows.map(row => {
                  const rowAspectRatioSum = row.reduce((total, image) => total + image.lowRes.aspectRatio, 0);
                  return row.map((image) => {
                    const { lowRes } = image;
                    const width = `calc(${(lowRes.aspectRatio / rowAspectRatioSum)} * (100% - ${padding*columns*2}px))`;
                    console.log(width)
                    return <Image imageName={image.lowRes.originalName} width={width}/>
                  })
                })
              }
            </div>
          )
        }
      }
    </ImageMap.Consumer>
    )
};
export default Grid;
