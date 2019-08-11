import React from 'react'
import styled from 'styled-components'

const RibbonWrapper = styled.div`
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
    background: ${props => props.color};
    box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
    position: absolute;
    top: 19px; left: -21px;
  }
  
  & > span::before {
    content: "";
    position: absolute; left: 0px; top: 100%;
    z-index: -1;
    border-left: 3px solid ${props => props.color};
    border-right: 3px solid transparent;
    border-bottom: 3px solid transparent;
    border-top: 3px solid ${props => props.color};
  }
  
  & > span::after {
    content: "";
    position: absolute; right: 0px; top: 100%;
    z-index: -1;
    border-left: 3px solid transparent;
    border-right: 3px solid ${props => props.color};
    border-bottom: 3px solid transparent;
    border-top: 3px solid ${props => props.color};
  }
`


const Ribbon = ({ text, color }) => {
  return (
    <RibbonWrapper color={color}>
      <span>{text}</span>
    </RibbonWrapper>
  )
}

export default Ribbon
