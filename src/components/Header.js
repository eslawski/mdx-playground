import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Menu = styled.header`
  background: black;
  width: 100%;
  display: flex;
  justify-content: center;
`

const InnerMenu = styled.ul`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
`

const linkStyle = {
  display: "inline-block",
  color: "white",
  textAlign: "center",
  padding: "14px 16px",
  textDecoration: "none",
  fontWeight: "bold"
}

const Header = () => {
  return (
    <Menu>
      <InnerMenu>
        <li>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </li>
      </InnerMenu>
    </Menu>
  )
}

export default Header