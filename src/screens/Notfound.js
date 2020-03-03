import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #0e101c;
`
const Text = styled.h1`
color :white;
font-size: 4em;
`

const NotFound = () => {
  return (
    <Container>
      <Text>404</Text>
      <Text>Page not Found</Text>
      <Link to='/'>Return to Home Page</Link>
    </Container>
  )
}

export default NotFound
