import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {rhythm, scale} from "../styles/typography"


const Wrapper = styled.section`
  position: relative;
  min-height: 300px;
`
const BgImg = styled(Img)`
  position: absolute
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  min-height: 300px;
  max-height: 100vh; // clips the height of the image on large screens
  height: auto;
  @media (min-width: ${props => props.theme.breakpoints.phone}) {
    height: ${props => props.height || 'auto'};
  }
  & > img {
    object-fit: ${props => props.fit || 'cover'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
  }
  &::before {
    content: '';
    background: rgba(0, 0, 0, 0.35);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`

const HeroContent = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
`

const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 0;
  padding-bottom: ${rhythm(.2)};
  border-bottom: 2px solid white;
  
  ${scale(1.7)}
  @media screen and (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: ${props => props.theme.blog.titleFontSmall};
  }
`

const Date = styled.h2`
  font-weight: 300;
  font-size: ${props => props.theme.blog.dateFontSize};
  @media screen and (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: ${props => props.theme.blog.dateFontSizeSmall};
  }
`

const Hero = ({ title, date, image, height }) => {
  return (
    <Wrapper>
      <BgImg
        height={height}
        fluid={image.fluid}
        backgroundColor={'#eeeeee'}
      />
      <HeroContent>
        <Title>{title}</Title>
        <Date>{date}</Date>
      </HeroContent>
    </Wrapper>
  )
}

export default Hero
