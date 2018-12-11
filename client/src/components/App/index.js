import React from 'react'
import styled from 'styled-components'

import Navigation from '../Navigation'
import Routes from '../Routes'

const Wrapper = styled.div`
  margin: 20px;
`

const App = () => (
  <Wrapper>
    <Navigation />
    <hr />
    <Routes />
  </Wrapper>
)

export default App
