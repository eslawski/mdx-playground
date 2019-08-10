import React from 'react'
import styled from 'styled-components'
import Image from "./image"
import {ImageMap} from "./image-map-context"


const Grid = styled.div`
`

const TopImage = styled.div`
  grid-area: top-image
`;

const BottomImage = styled.div`
  grid-area: bottom-image
`;

const PortraitImage = styled.div`
  grid-area: portrait-image
`;

const ImageTrifecta = ({topImageName, bottomImageName, portraitImageName}) => {
  return (
    <ImageMap.Consumer>
      {
        (imageMap) => {
          const topImage = imageMap[topImageName],
                bottomImage = imageMap[bottomImageName],
                portraitImage = imageMap[portraitImageName];
          const padding = 1;
          const trifectaWidth = 500;

          console.log("top image: " + topImage.lowRes.aspectRatio)
          console.log("bottom image: " + bottomImage.lowRes.aspectRatio)
          console.log("portrait image: " + portraitImage.lowRes.aspectRatio)



          const combinedLandscapeHeight = (bottomImage.lowRes.presentationHeight * 2)
          const combinedLandscapeAspectRatio = bottomImage.lowRes.presentationWidth / combinedLandscapeHeight
          const targetHeight = (portraitImage.lowRes.presentationHeight + bottomImage.lowRes.presentationHeight) / 2;
          const portraitScaleUpFactor = targetHeight / portraitImage.lowRes.presentationHeight
          const combinedLandscapeScaleDownFactor = targetHeight / combinedLandscapeHeight
          const portraitWidth = portraitImage.lowRes.aspectRatio * portraitScaleUpFactor * portraitImage.lowRes.presentationHeight
          const bottomWidth = combinedLandscapeAspectRatio * combinedLandscapeHeight * combinedLandscapeScaleDownFactor

          const portraitPercent = (portraitWidth / (portraitWidth + bottomWidth)) * 100
          const bottomPercent = 100 - portraitPercent

          const calcString = `calc()`

          //
          // const aspectRatioWidth = bottomImage.lowRes.aspectRatio + portraitImage.lowRes.aspectRatio;
          // const targetHeight = (portraitImage.lowRes.presentationHeight + bottomImage.lowRes.presentationHeight) / 2;
          // const portraitWidth = (portraitImage.lowRes.aspectRatio) * (targetHeight/portraitImage.lowRes.presentationHeight) * 100;
          //
          // const bottomWidth = 100 - portraitWidth;
          console.log("PORTRAIT WIDTH: " + portraitPercent)
          console.log("Bottom WIDTH: " + bottomPercent)



          return (
            <Grid style={{
              width: trifectaWidth,
              display: "grid",
              gridTemplateColumns: `${bottomPercent}fr ${portraitPercent}fr`,
              gridTemplateAreas: `
                                  "top-image portrait-image"
                                  "bottom-image portrait-image"

              `,
              gridRowGap: 2,
              gridColumnGap: 2
            }}>
              <TopImage><Image imageName={topImageName} padding={0}/></TopImage>
              <BottomImage><Image imageName={bottomImageName} padding={0}/></BottomImage>
              <PortraitImage><Image imageName={portraitImageName} padding={0}/></PortraitImage>
            </Grid>
          )
        }
      }
    </ImageMap.Consumer>

  )
}

export default ImageTrifecta
