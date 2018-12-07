import React from 'react'
import styled from 'styled-components'
import { useAuthState } from 'react-firebase-hooks/auth'

import Navigation from '../Navigation'
import Routes from '../Routes'
import SignOut from '../SignOut'
import { auth } from '../Firebase'
import Loading from '../Loading'

const Wrapper = styled.div`
  margin: 20px;
`

const App = () => {
  const { initialising } = useAuthState(auth)

  return (
    <Wrapper>
      <Navigation />
      <hr />
      <Routes />
      <SignOut />
      {initialising && <Loading />}
    </Wrapper>
  )
}

export default App
