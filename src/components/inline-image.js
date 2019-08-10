import React from 'react'
import Image from "./image"
import styled from 'styled-components'


const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.45rem;
`

const InlineImage = ({ imageName }) => {
  return (
    <CenteredDiv>
      <Image imageName={imageName} width={"70%"}/>
    </CenteredDiv>
  )
}

export default InlineImage
