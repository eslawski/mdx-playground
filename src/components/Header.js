import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Menu = styled.header`
  background: black;
  width: 100%;
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
      <ul>
        <li>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </li>
      </ul>
    </Menu>
  )
}

export default Header