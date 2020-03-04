import React from 'react'
import FormControl from '../../components/FormControl'
import { Container } from '../../style/Container'
import ConfirmButton from '../../components/ConfirmButton'
import { useForm } from 'react-hook-form'
const Register = () => {
  const { handleSubmit, register, errors } = useForm()
  console.log(errors)
  const onSubmit = values => {
    console.log(values)
  }
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl label='Firstname' />
        <FormControl label='Lastname' />
        <FormControl
          label='E-Mail'
          name='email'
          ref={register({
            required: 'Required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'invalid email address'
            }
          })}
        />
        {errors.email && errors.email.message}
        <FormControl label='Password' />
        <ConfirmButton type='submit' onclick={handleSubmit} primary title='Confirmer' />
      </form>
    </Container>

  )
}

export default Register
