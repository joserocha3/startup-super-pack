import React from 'react'
import get from 'lodash.get'

import Firebase from '../Firebase'
import AuthenticatedRoutes from './AuthenticatedRoutes'
import PublicRoutes from './PublicRoutes'

const Routes = () => (
  <Firebase>
    {({ auth }) => (
      get(auth, 'user.uid')
        ? <AuthenticatedRoutes />
        : <PublicRoutes />
    )}
  </Firebase>
)

export default Routes
