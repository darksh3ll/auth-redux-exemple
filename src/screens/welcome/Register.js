import React from 'react'
import FormControl from '../../components/FormControl'
import { Container } from '../../style/Container'
import ConfirmButton from '../../components/ConfirmButton'

const Register = () => {
  return (
    <Container>
      <FormControl placeholder='Firstname' />
      <FormControl placeholder='Lastname' />
      <FormControl placeholder='Email' />
      <FormControl placeholder='Password' />
      <ConfirmButton primary title='Confirmer' />
    </Container>

  )
}

export default Register
