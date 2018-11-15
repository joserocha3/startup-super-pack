import React from 'react'
import styled, { keyframes } from 'styled-components'

import Header from './Header'

import logo from '../assets/logo.svg'

const Wrapper = styled.div`
  text-align: center;
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
