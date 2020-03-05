import React from 'react'

import styled from 'styled-components'
const Button = styled.button`
    color: palevioletred;
    background-color: transparent;
    text-transform: uppercase;
    border:1px solid  palevioletred;
    margin-top: 40px;
    padding: 20px;
    letter-spacing: 2px;
    font-size: 16px;
    font-weight: 100;
    cursor: pointer;
    border-radius: 5px;
    min-width: 300px;
        height: 50px;

      &:hover{
    background-color: palevioletred;
    border: none;
    transition: 1s;
    color: white;
    }
    @media screen and (min-width: 425px) {
    min-width: 400px;

}
 
/*Ecran Moyen desktop*/
 
@media screen and (min-width: 768px) {
    min-width: 600px;

}
`
const ConfirmButton = ({ type, title, onclick, ...props }) => {
  const { primary, disabled } = props
  console.log(disabled);
  return (
    <Button
      type={type}
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
