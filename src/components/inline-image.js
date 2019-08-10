import React from 'react'
import Image from "./image"
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

const InlineImage = ({ imageName }) => {
  return (
    <CenteredDiv>
      <Image imageName={imageName}/>
    </CenteredDiv>
  )
}

export default InlineImage
