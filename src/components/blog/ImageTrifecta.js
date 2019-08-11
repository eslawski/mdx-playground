import React from 'react'
import styled from 'styled-components'
import Image from "../Image"
import {ImageMap} from "../contexts/image-map-context"


const Grid = styled.div`
  width: 70%;
  margin: auto auto;
  display: grid;
  grid-template-columns: ${props => props.gridConfig.templateColumns};
  grid-template-areas: ${props => props.gridConfig.gridAreas};
  grid-gap: 2px;
  margin-bottom: ${props => props.theme.blog.spacing};
  
    width: ${props => props.theme.blog.inlineMediaWidth};
  @media screen and (max-width: ${props => props.theme.breakpoints.phone}) {
      width: ${props => props.theme.blog.inlineMediaWidthSmall};
  }
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

const ImageTrifecta = ({topImageName, bottomImageName, portraitImageName, orientation = 'right'}) => {
  return (
    <ImageMap.Consumer>
      {
        (imageMap) => {
          const bottomImage = imageMap[bottomImageName],
                portraitImage = imageMap[portraitImageName];


          /**
           * There is a slight bug with the portrait image being too short because it does not take into account
           * the height of the grid gap between the two landscape images. The math is somewhat complex, but I think it
           * can be simplified. Check out this article: https://medium.com/buildit/hardcore-css-calc-bdfb0162993c
           **/
          const combinedLandscapeHeight = (bottomImage.lowRes.presentationHeight * 2)
          const combinedLandscapeAspectRatio = bottomImage.lowRes.presentationWidth / combinedLandscapeHeight
          const targetHeight = (portraitImage.lowRes.presentationHeight + bottomImage.lowRes.presentationHeight) / 2;
          const portraitScaleUpFactor = targetHeight / portraitImage.lowRes.presentationHeight
          const combinedLandscapeScaleDownFactor = targetHeight / combinedLandscapeHeight
          const portraitWidth = portraitImage.lowRes.aspectRatio * portraitScaleUpFactor * portraitImage.lowRes.presentationHeight
          const bottomWidth = combinedLandscapeAspectRatio * combinedLandscapeHeight * combinedLandscapeScaleDownFactor

          const portraitPercent = (portraitWidth / (portraitWidth + bottomWidth)) * 100
          const bottomPercent = 100 - portraitPercent

          const configurations = {
            leftPortrait: {
              gridAreas: `
                "portrait-image top-image"
                "portrait-image bottom-image"
              `,
              templateColumns: `${portraitPercent}fr ${bottomPercent}fr`
            },
            rightPortrait: {
              gridAreas: `
                "top-image portrait-image"
                "bottom-image portrait-image"
              `,
              templateColumns: `${bottomPercent}fr ${portraitPercent}fr`
            }
          }

          const gridConfig = orientation === 'right' ? configurations.rightPortrait : configurations.leftPortrait

          return (
            <Grid gridConfig={gridConfig}>
              <TopImage><Image imageName={topImageName} margin={0}/></TopImage>
              <BottomImage><Image imageName={bottomImageName} margin={0}/></BottomImage>
              <PortraitImage><Image imageName={portraitImageName} margin={0}/></PortraitImage>
            </Grid>
          )
        }
      }
    </ImageMap.Consumer>

  )
}

export default ImageTrifecta
