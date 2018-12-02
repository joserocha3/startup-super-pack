import React from 'react'

import Firebase from '../Firebase'

const SignOutButton = () => (
  <Firebase>
    {({ auth }) => (
      <button type="button" onClick={auth.signOut}>Sign Out</button>
    )}
  </Firebase>
)

export default SignOutButton
