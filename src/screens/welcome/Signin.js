import React, { useState } from 'react'
import FormControl from '../../components/FormControl'
import ConfirmButton from '../../components/ConfirmButton'
import { Container } from '../../style/Container'
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Loading from '../../components/Loadin'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { signoutUser, signUser } from '../../store/auth/action'

export const Title = styled.h1`
color:white;
margin:20px;
`

const Signin = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('samuel@makeitcreative.fr')
  const [password, setPassword] = useState('quaengee13')
  const [loadind, setLoading] = useState(false)
  const notifySuccess = () => toast.success('Connexion reussi 😃!')
  const notifyError = () => toast.error('Désolé, nous n\'avons pas trouvé de compte avec cette adresse e-mail. Veuillez réessayer ou créez un nouveau compte.')

  const getLogout = () => dispatch(signoutUser())
  const getInscription = () => {
    setLoading(true)
    axios.post('https://console.bagmobile.fr/api/fr/users/login', {
      username: email,
      password: password
    })
      .then((res) => {
        console.log(res.data.data)
        setLoading(false)
        notifySuccess()
        dispatch(signUser(true))
      })
      .catch((error) => {
        if (error) {
          setLoading(false)
          notifyError()
        }
      })
  }
  return (
    <Container>
      <ToastContainer />
      {loadind && <Loading />}
      <Title>Login</Title>
      <FormControl value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
      <FormControl value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
      <ConfirmButton onclick={getInscription} title='Confirmer' />
    </Container>
  )
}

export default Signin
