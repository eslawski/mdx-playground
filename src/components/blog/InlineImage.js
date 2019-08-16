import React from 'react'
import Image from "../Image"
import styled from 'styled-components'
import {ImageMap} from "../contexts/image-map-context"
import InlineMediaWrapper from "./InlineMediaWrapper"

const Sizer = styled.div`
  ${({isPortrait, theme}) => isPortrait && `
    width: 40%;
    @media screen and (max-width: ${theme.breakpoints.phone}) {
      width: 60%
    }
  `}
  ${({isPortrait, theme}) => !isPortrait && `
      width: 80%;
      @media screen and (max-width: ${theme.breakpoints.phone}) {
        width: 100%;
      }
  `}
  ${({isPano}) => isPano && `
    width: 100%;
  `}
`

const InlineImage = ({ imageName }) => {
  return (
    <ImageMap.Consumer>
      {
        imageMap => {
          const image = imageMap[imageName],
                isPortrait = image.lowRes.aspectRatio <= .75,
                isPano = image.lowRes.aspectRatio > 2,
                forceHighRes = !isPortrait; // Force high res when a landscape image exists on it's own

          return (
            <InlineMediaWrapper>
              <Sizer isPortrait={isPortrait} isPano={isPano}>
                <Image imageName={imageName} forceHighRes={forceHighRes}/>
              </Sizer>
            </InlineMediaWrapper>
          )
        }
      }
    </ImageMap.Consumer>
  )
}

export default InlineImage
