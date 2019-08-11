
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Ribbon from "./Ribbon"

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

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
`

const DateString = styled.h3`
  margin: 0 1rem 0.5rem 1rem;
  color: gray;
`


const Description = styled.p`
  margin: 0 1rem 1rem 1rem;
  line-height: 1.6;
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
      <Link to={`/${slug}/`}>
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