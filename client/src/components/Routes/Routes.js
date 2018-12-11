import React from 'react'

import AuthenticatedRoutes from './AuthenticatedRoutes'
import PublicRoutes from './PublicRoutes'

import useAuthState from '../../utilities/useAuthState'

const Routes = () => {
  const { user } = useAuthState()

  return (
    user.uid
      ? (
        <AuthenticatedRoutes
          admin={user.admin}
          client={user.client}
        />
      )
      : <PublicRoutes />
  )
}

export default Routes
