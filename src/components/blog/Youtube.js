import React from 'react'
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
  
  position:relative;
  overflow:hidden;
`



const Youtube = ({ videoUrl }) => {
  return (
    <CenteredDiv>
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
    </CenteredDiv>
  )
}

export default Youtube
