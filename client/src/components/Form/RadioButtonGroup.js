import React from 'react'
import styled from 'styled-components'

import InputFeedback from './InputFeedback'

const Wrapper = styled.div`

`

const RadioButtonGroup = ({
  value,
  error,
  touched,
  label,
  children,
}) => (
  <Wrapper
    success={value || (!error && touched)}
    error={!error && touched}
  >
    <fieldset>
      <legend>{label}</legend>
      {children}
      {touched && <InputFeedback error={error} /> }
    </fieldset>
  </Wrapper>
)

export default RadioButtonGroup
