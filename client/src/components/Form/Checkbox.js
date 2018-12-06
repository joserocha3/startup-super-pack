import React from 'react'
import styled from 'styled-components'

import InputFeedback from './InputFeedback'

const Input = styled.input`

`

const Label = styled.label`

`

const Checkbox = ({
  field: {
    name,
    value,
    onChange,
    onBlur,
  },
  form: {
    errors,
    touched,
  },
  id,
  label,
}) => (
  <div>
    <Input
      name={name}
      id={id}
      type="checkbox"
      value={value}
      checked={value}
      onChange={onChange}
      onBlur={onBlur}
    />
    <Label htmlFor={id}>
      {label}
    </Label>
    {touched[name] && <InputFeedback error={errors[name]} /> }
  </div>
)


export default Checkbox
