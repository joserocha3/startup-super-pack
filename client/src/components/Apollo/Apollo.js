import React from 'react'

import Context from './context'

const Apollo = ({ children }) => <Context.Consumer>{children}</Context.Consumer>

export default Apollo
