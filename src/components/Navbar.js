import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.div`
 background-color: palevioletred;
 height: 60px;
 display: flex;
 align-items: center;
 justify-content: flex-end;
 & p {
 color: white;
 margin: 10px;
 border: 1px solid white;
 padding: 10px;
 border-radius: 5px;
 }
 & p:hover  {
 background-color: white;
 color: #282c34;
 }
`

const Navbar = () => {
  return (
    <Nav>
      <Link to='/signin'>
        <p>Connexion</p>
      </Link>
      <Link to='/register'>
        <p>Inscription</p>
      </Link>
    </Nav>
  )
}

export default Navbar
