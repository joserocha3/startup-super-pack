import React from 'react'

import AuthenticatedNavigation from './AuthenticatedNavigation'
import PublicNavigation from './PublicNavigation'

import useAuthState from '../../utilities/useAuthState'

const Navigation = () => {
  const { user } = useAuthState()

  return (
    user.uid
      ? (
        <AuthenticatedNavigation
          admin={user.admin}
          client={user.client}
        />
      )
      : <PublicNavigation />
  )
}

export default Navigation
