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
  font-size: 1.15rem;
  margin-bottom: 0;
`

const linkStyle = {
  display: "inline-block",
  color: "white",
  textAlign: "center",
  padding: "15px 16px",
  textDecoration: "none",
  fontWeight: "bold"
}

const Header = () => {
  return (
    <Menu>
      <InnerMenu>
        <li style={{marginBottom: 0}}>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </li>
      </InnerMenu>
    </Menu>
  )
}

export default Header