
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Ribbon from "./Ribbon"
import {rhythm, scale} from "../styles/typography"

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

const Title = styled.h3`
  line-height: ${rhythm(1.2)};
  margin: ${rhythm(.5)} ${rhythm(.8)} 0 ${rhythm(.5)};
`

const DateString = styled.h6`
  ${scale(-.3)}
  margin: ${rhythm(.1)} ${rhythm(.8)} 0 ${rhythm(.5)};
  color: gray;
`


const Description = styled.h5`
  ${scale(-.1)}
  padding: ${rhythm(.2)} ${rhythm(.8)} ${rhythm(.4)} ${rhythm(.5)};
`

const Card = ({
                slug,
                image,
                title,
                date,
                description,
                favorite,
                ...props
              }) => {

    const daysRecent = 3,
      days = (Date.now() - Date.parse(date)) / (24*60*60*1000),
      isNew = days <= daysRecent;

    return (
    <Post>
      <Link to={`${slug}/`}>
        <Img fluid={image.fluid} backgroundColor={'#eeeeee'} />
        <Title>{title}</Title>
        <DateString>{date}</DateString>
        <Description>{description}</Description>
      </Link>
      {isNew && <Ribbon text={"New!"} color={"#308014"}/>}
      {(favorite && !isNew) && <Ribbon text={"Favorite"} color={"#8B0000"}/>}
    </Post>
  )
}

export default Card