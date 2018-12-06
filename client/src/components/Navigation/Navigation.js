import React from 'react'
import get from 'lodash.get'

import Firebase from '../Firebase'
import AuthenticatedNavigation from './AuthenticatedNavigation'
import PublicNavigation from './PublicNavigation'

const Navigation = () => (
  <Firebase>
    {({ auth }) => (
      get(auth, 'user.uid')
        ? <AuthenticatedNavigation admin={get(auth, 'user.admin')} />
        : <PublicNavigation />
    )}
  </Firebase>
)

export default Navigation
