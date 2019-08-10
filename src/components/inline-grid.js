import React from 'react'
import Grid from "./grid"
import styled from 'styled-components'


const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.45rem;
`

const InlineGrid = ({ imageNames, columns, spacing }) => {
  return (
    <CenteredDiv>
      <Grid imageNames={imageNames} width={"70%"} columns={columns} spacing={spacing}/>
    </CenteredDiv>
  )
}

export default InlineGrid
