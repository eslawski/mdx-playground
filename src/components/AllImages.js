import React from 'react'
import styled from "styled-components"
import MediaQuery from 'react-responsive';
import { ThemeConsumer } from 'styled-components'
import ImageGrid from "./ImageGrid"


const GridWrapper = styled.div`
  max-width: ${props => props.theme.maxWidths.imagesSection};
  margin: auto;
`

const AllImagesTitle = styled.h2`
  font-weight: bold;
  margin-bottom: 1rem;
  padding-left: .25rem;
  line-height: 2.25rem;
  border-bottom: 2px solid black;
`

const AllImages = ({imageNames}) => {
  return (
    <GridWrapper>
      <AllImagesTitle>All Images</AllImagesTitle>
      <ThemeConsumer>
        {(theme) => {
          return (
            <MediaQuery maxWidth={theme.breakpoints.phone}>
              {(matches) => {
                let columns = matches ? 3 : 4;
                return <ImageGrid imageNames={imageNames} columns={columns}/>
              }}
            </MediaQuery>
          )}
        }
      </ThemeConsumer>
    </GridWrapper>
  )
};
export default AllImages;
