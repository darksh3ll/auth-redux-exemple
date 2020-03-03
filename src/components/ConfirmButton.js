import React from 'react'

import styled from 'styled-components'
const Button = styled.button`
    background-color: palevioletred;
    text-transform: uppercase;
    border: none;
    margin-top: 40px;
    padding: 20px;
    letter-spacing: 2px;
    font-size: 16px;
    font-weight: 100;
    cursor: pointer;
    min-width: 300px;
        height: 50px;

      &:hover{
    background-color: white;
    border: none;
    transition: 1s;
    }
    @media screen and (min-width: 425px) {
    min-width: 400px;

}
 
/*Ecran Moyen desktop*/
 
@media screen and (min-width: 768px) {
    min-width: 600px;

}
`
const ConfirmButton = ({ title, onclick, ...props }) => {
  const { primary, disabled } = props
  return (
    <Button
      primary={primary}
      disabled={disabled}
      onClick={onclick}
      props={props}
    >
      {title}
    </Button>
  )
}

export default ConfirmButton
