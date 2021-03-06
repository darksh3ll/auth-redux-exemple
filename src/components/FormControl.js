import React from 'react'
import styled from 'styled-components'
const Input = styled.input`
    display: block;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid palevioletred;
    padding: 10px 15px;
    margin-top: 5px;
    font-size: 14px;
    min-width: 300px;
    height: 50px;
    /*Tablette*/
@media screen and (min-width: 425px) {
    min-width: 400px;

}
 
/*Ecran Moyen desktop*/
 
@media screen and (min-width: 768px) {
    min-width: 600px;

}
`
const Label = styled.label`
  color: white;
`

const FormControl = ({ value, onChange, name, placeholder, refe, label, children, type }) => {
  return (
    <div style={{ marginBottom: 40 }}>
      <Label>{label}</Label>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        ref={refe}
        type={type}
      />
      <div style={{ marginTop: 10, color: 'palevioletred' }}>{children}</div>

    </div>

  )
}

export default FormControl
