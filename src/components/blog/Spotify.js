import React from 'react'
import InlineMediaWrapper from "./InlineMediaWrapper"


const Spotify = ({ songUrl }) => {
  return (
    <InlineMediaWrapper>
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
    </InlineMediaWrapper>
  )
}

export default Spotify
