import React from 'react'
import ImageGrid from "../ImageGrid"
import styled from 'styled-components'


const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${props => props.theme.blog.spacing};
  margin-left: auto;
  margin-right: auto;

  width: ${props => props.theme.blog.inlineMediaWidth};
  @media screen and (max-width: ${props => props.theme.breakpoints.phone}) {
      width: ${props => props.theme.blog.inlineMediaWidthSmall};
  }
`

const InlineGrid = ({ imageNames, columns, spacing }) => {
  return (
    <CenteredDiv>
      <ImageGrid imageNames={imageNames} columns={columns} spacing={spacing}/>
    </CenteredDiv>
  )
}

export default InlineGrid
