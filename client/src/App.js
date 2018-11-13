import React from 'react'
import styled, { keyframes } from 'styled-components'

import logo from './logo.svg'

const Wrapper = styled.div`
  text-align: center;
`

const Header = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Logo = styled.img`
  animation: 20s ${logoSpin} infinite linear;
  height: 40vmin;
`

const Link = styled.a`
  color: #61dafb;
`

const App = () => (
  <Wrapper>
    <Header>
      <Logo src={logo} alt="logo" />
      <p>
        Edit&nbsp;
        <code>src/App.js</code>
        &nbsp;and save to reload.
      </p>
      <Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </Link>
    </Header>
  </Wrapper>
)

export default App
