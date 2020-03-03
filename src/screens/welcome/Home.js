import React from 'react'
import { Container } from '../../style/Container'
import styled from 'styled-components'
const Title = styled.h1`
  font-size: 3em;
  color: white;
`
const Home = () => {
  return (
    <Container>
      <Title>
        Home
      </Title>
    </Container>
  )
}

export default Home
