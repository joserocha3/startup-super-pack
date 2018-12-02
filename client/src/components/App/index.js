import React from 'react'
import styled from 'styled-components'

import Navigation from '../Navigation'
import Routes from '../Routes'
import SignOut from '../SignOut'
import Firebase from '../Firebase'
import Loading from '../Loading'

const Wrapper = styled.div`
  margin: 20px;
`

const App = () => (
  <Firebase>
    {({ loading }) => (
      <Wrapper>
        <Navigation />
        <hr />
        <Routes />
        <SignOut />
        {loading && <Loading />}
      </Wrapper>
    )}
  </Firebase>
)

export default App
