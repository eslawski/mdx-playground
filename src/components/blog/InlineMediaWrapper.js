import React from 'react'
import styled from "styled-components"

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
const InlineMediaWrapper = ({children}) => {
  return (
    <CenteredDiv>
      {children}
    </CenteredDiv>
  )
}

export default InlineMediaWrapper;