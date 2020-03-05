import React from 'react'
import FormControl from '../../components/FormControl'
import { Container } from '../../style/Container'
import ConfirmButton from '../../components/ConfirmButton'
import { useForm } from 'react-hook-form'
import { DevTool } from 'react-hook-form-devtools'
const Register = () => {
  const { handleSubmit, register, errors, control } = useForm()
  console.log(errors)
  const onSubmit = values => {
    console.log(values)
  }
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>

        <FormControl
          type='text'
          label='Firstname'
          name='firstname'
          refe={register({ required: true })}
        />
        {errors.firstname && errors.firstname.message}
        <FormControl label='Lastname' />

        <FormControl
          type='email'
          label='E-Mail'
          name='email'
          refe={register({
            required: 'Required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'invalid email address 📛'
            }
          })}
        >
          {errors.email && errors.email.message}
        </FormControl>

        <FormControl type='password' label='Password' />
        <ConfirmButton type='submit' onclick={handleSubmit} primary title='Confirmer' />
      </form>
      <DevTool control={control} />

    </Container>

  )
}

export default Register
