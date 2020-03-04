import React from 'react'
import { Container } from '../../style/Container'
import styled from 'styled-components'
import Navbar from '../../components/Navbar'
const Title = styled.h1`
  font-size: 3em;
  color: white;
  text-align: center;
`
const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Title>
            Organisez votre quotidien
            avec TodoAppReact
        </Title>
      </Container>
    </>

  )
}

export default Home
