
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

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

const Ribbon = styled.div`
  position: absolute;
  left: -5px; top: -5px;
  z-index: 1;
  overflow: hidden;
  width: 75px; height: 75px;
  text-align: right;
  
  & > span {
    font-size: 10px;
    font-weight: bold;
    color: #FFF;
    text-transform: uppercase;
    text-align: center;
    line-height: 20px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    width: 100px;
    display: block;
    background: ${props => props.theme.colors.ribbon};
    box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
    position: absolute;
    top: 19px; left: -21px;
  }
  
  & > span::before {
    content: "";
    position: absolute; left: 0px; top: 100%;
    z-index: -1;
    border-left: 3px solid ${props => props.theme.colors.ribbon};
    border-right: 3px solid transparent;
    border-bottom: 3px solid transparent;
    border-top: 3px solid ${props => props.theme.colors.ribbon};
  }
  
  & > span::after {
    content: "";
    position: absolute; right: 0px; top: 100%;
    z-index: -1;
    border-left: 3px solid transparent;
    border-right: 3px solid ${props => props.theme.colors.ribbon};
    border-bottom: 3px solid transparent;
    border-top: 3px solid ${props => props.theme.colors.ribbon};
  }
`

const Card = ({
                slug,
                image,
                title,
                date,
                description,
                ...props
              }) => {

    const daysRecent = 3,
      days = (Date.now() - Date.parse(date)) / (24*60*60*1000),
      isNew = days <= daysRecent;

    console.log(days)

  return (
    <Post>
      <Link to={`/${slug}/`}>
        <Img fluid={image.fluid} backgroundColor={'#eeeeee'} />
        <Title>{title}</Title>
        <DateString>{date}</DateString>
        <Description>{description}</Description>
      </Link>
      {isNew && <Ribbon><span>New!</span></Ribbon>}
    </Post>
  )
}

export default Card