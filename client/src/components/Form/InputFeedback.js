import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

`

const InputFeedback = ({ error }) => (
  error
    ? <Wrapper>{error}</Wrapper>
    : null
)

export default InputFeedback
