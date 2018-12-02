import React from 'react'

import Context from './context'

const Firebase = ({ children }) => <Context.Consumer>{children}</Context.Consumer>

export default Firebase
