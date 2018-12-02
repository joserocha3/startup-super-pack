import React from 'react'
import styled from 'styled-components'

const FullScreen = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(255,255,255, 0.85);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Loading = () => (
  <FullScreen>Loading...</FullScreen>
)

export default Loading
