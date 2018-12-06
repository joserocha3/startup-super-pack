import React from 'react'
import styled from 'styled-components'

const Label = styled.label`

`

const Input = styled.input`

`

const RadioButton = ({
  field: {
    name, value, onChange, onBlur,
  },
  id,
  label,
  className,
  ...props
}) => (
  <div>
    <Input
      name={name}
      id={id}
      type="radio"
      value={id} // could be something else for output?
      checked={id === value}
      onChange={onChange}
      onBlur={onBlur}
      {...props}
    />
    <Label htmlFor={id}>
      {label}
    </Label>
  </div>
)

export default RadioButton
