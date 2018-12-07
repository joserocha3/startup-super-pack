import React from 'react'

import { auth } from '../Firebase'

const SignOutButton = () => (
  <button type="button" onClick={() => auth.signOut()}>Sign Out</button>
)

export default SignOutButton
