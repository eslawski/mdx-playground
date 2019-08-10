import React from 'react'
import styled from 'styled-components'
import Image from "./image"
import {ImageMap} from "./image-map-context"


const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr;
  grid-template-rows: 3fr 3fr;
  grid-template-areas: "top-image portrait-image"
                       "bottom-image portrait-image";
`

const TopImage = styled.div`
  grid-area: top-image;
`;

const BottomImage = styled.div`
  grid-area: bottom-image;
`;

const PortraitImage = styled.div`
  grid-area: portrait-image;
  align-self: center
`;

const ImageTrifecta = ({topImageName, bottomImageName, portraitImageName}) => {
  return (
    <ImageMap.Consumer>
      {
        (imageMap) => {
          const topImage = imageMap[topImageName],
                bottomImage = imageMap[bottomImageName],
                portraitImage = imageMap[portraitImageName];

          console.log("top image: " + topImage.lowRes.aspectRatio)
          console.log("bottom image: " + bottomImage.lowRes.aspectRatio)
          console.log("portrait image: " + portraitImage.lowRes.aspectRatio)

          return (
            <Grid style={{width: 500}}>
              <TopImage><Image imageName={topImageName}/></TopImage>
              <BottomImage><Image imageName={bottomImageName}/></BottomImage>
              <PortraitImage><div><Image imageName={portraitImageName}/></div></PortraitImage>
            </Grid>
          )
        }
      }
    </ImageMap.Consumer>

  )
}

export default ImageTrifecta
