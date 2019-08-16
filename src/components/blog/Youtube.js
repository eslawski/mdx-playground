import React from 'react'
import InlineMediaWrapper from "./InlineMediaWrapper"


const Youtube = ({ videoUrl }) => {
  return (
    <InlineMediaWrapper>
        <div className="video-wrapper">
          <iframe
            title={videoUrl}
            width="560"
            height="315"
            src={videoUrl}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen>

          </iframe>
        </div>
    </InlineMediaWrapper>
  )
}

export default Youtube
