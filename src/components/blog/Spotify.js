import React from 'react'
import styled from 'styled-components'


const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${props => props.theme.blog.spacing};
  margin-left: auto;
  margin-right: auto;
`

const Spotify = ({ songUrl }) => {
  return (
    <CenteredDiv>
      <iframe
        title={songUrl}
        data-song-info=""
        className="embedded-song"
        src={songUrl}
        width="300"
        height="80"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media">
      </iframe>
    </CenteredDiv>
  )
}

export default Spotify
