import React from 'react'
import ImageGrid from "../ImageGrid"
import InlineMediaWrapper from "./InlineMediaWrapper"

const InlineGrid = ({ imageNames, columns, spacing }) => {
  return (
    <InlineMediaWrapper>
      <ImageGrid imageNames={imageNames} columns={columns} spacing={spacing}/>
    </InlineMediaWrapper>
  )
}

export default InlineGrid
