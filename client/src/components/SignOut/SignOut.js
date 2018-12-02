import React from 'react'
import get from 'lodash.get'

import Firebase from '../Firebase'
import Apollo from '../Apollo'

const SignOut = () => (
  <Firebase>
    {({ auth }) => (
      <Apollo>
        {({ client }) => {
          // Apollo caches all query results, get rid of them when the login state changes
          if (!get(auth, 'user.uid')) client.clearStore()
          return null
        }}
      </Apollo>
    )}
  </Firebase>
)

export default SignOut
