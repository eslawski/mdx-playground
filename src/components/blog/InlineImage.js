import React from 'react'
import Image from "../Image"
import styled from 'styled-components'
import {ImageMap} from "../contexts/image-map-context"


const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${props => props.theme.blog.spacing};
  margin-left: auto;
  margin-right: auto;
  
  ${({isPortrait, theme}) => isPortrait && `
    width: ${theme.blog.inlineMediaPortraitWidth};
    @media screen and (max-width: ${theme.breakpoints.phone}) {
      width: ${theme.blog.inlineMediaPortraitWidthSmall};
    }
  `}
  ${({isPortrait, theme}) => !isPortrait && `
      width: ${theme.blog.inlineMediaWidth};
      @media screen and (max-width: ${theme.breakpoints.phone}) {
        width: ${theme.blog.inlineMediaWidthSmall};
      }
  `}
`

const InlineImage = ({ imageName }) => {
  return (
    <ImageMap.Consumer>
      {
        imageMap => {
          const image = imageMap[imageName],
                isPortrait = image.lowRes.aspectRatio <= .75;

          return (
            <CenteredDiv isPortrait={isPortrait}>
              <Image imageName={imageName}/>
            </CenteredDiv>
          )
        }
      }
    </ImageMap.Consumer>
  )
}

export default InlineImage
