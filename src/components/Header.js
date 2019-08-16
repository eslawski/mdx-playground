import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Menu = styled.header`
  background: black;
  width: 100%;
  display: flex;
  justify-content: center;
  height: ${props => props.theme.headerHeight};;
`

const MenuItems = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-width: ${props => props.theme.maxWidths.index};
  font-size: 1.15rem;
  margin-bottom: 0;
`

const MenuItemsRight = styled.div`
  display: flex;
  width: 100%;
  max-width: ${props => props.theme.maxWidths.index};
  font-size: 1.15rem;
  margin-bottom: 0;
`

const SiteTitle = styled.h5`
  display: flex;
  align-items: center;
  color: white;
  font-weight: 300;
  margin: 0;
  height: 100%;
  position: absolute;  
  right: 0;
  padding-right: .5rem;
`


const linkStyle = {
  display: "flex",
  color: "white",
  alignItems: "center",
  textDecoration: "none",
  fontWeight: "bold",
  padding: "0 15px"
}

const Header = () => {
  return (
    <Menu>
      <MenuItems>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <SiteTitle>evanslawski.com</SiteTitle>

      </MenuItems>
    </Menu>
  )
}

export default Header