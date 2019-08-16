import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Ribbon from "./Ribbon"
import { ThemeConsumer } from 'styled-components'

const Post = styled.li`
  list-style: none;
  position: relative;
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin: 0 0 1em 0;
  width: 100%;
  transition: background 0.2s;
  @media screen and (min-width: ${props => props.theme.breakpoints.phone}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 32%')};
  }
  &:hover {
    background: lightgrey;
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: #000000;
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
      @media screen and (min-width: ${props => props.theme.breakpoints.phone}) {
        padding-bottom: 60%
      }
    }
  }
`

const Metadata = styled.div`
  padding: .5rem .5rem .5rem .5rem;
`

const Title = styled.h3`
  margin: 0;
  font-weight: 500;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.phone}) {
    font-size: 1.5rem;
    line-height: 1.3;
  }
`

const DateString = styled.h6`
  margin: 0;
  font-weight: 400;
  color: gray;
  line-height: 1.5;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.phone}) {
    font-size: .75rem;
  }
`


const Description = styled.p`
  font-size: .75rem;
  line-height: 1.5;
  margin: 0;
  padding-top: .5rem;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.phone}) {
    font-size: .9rem;
  }
`

const Card = ({
                slug,
                image,
                title,
                date,
                description,
                favorite,
              }) => {

    const daysRecent = 3,
      days = (Date.now() - Date.parse(date)) / (24*60*60*1000),
      isNew = days <= daysRecent;

    return (
    <Post>
      <Link to={`${slug}/`}>
        <Img fluid={image.fluid}/>
        <Metadata>
          <Title>{title}</Title>
          <DateString>{date}</DateString>
          <Description>{description}</Description>
        </Metadata>
      </Link>
      <ThemeConsumer>
        {
          theme => {
            return (
              <>
                {isNew && <Ribbon text={"New!"} color={theme.colors.green}/>}
                {(favorite && !isNew) && <Ribbon text={"Favorite"} color={theme.colors.red}/>}
              </>
            )
          }
        }
      </ThemeConsumer>
    </Post>
  )
}

export default Card