import React from 'react'

import { PasswordResetForm } from '../PasswordReset'
import PasswordChangeForm from '../PasswordChangeForm'

import useAuthState from '../../utilities/useAuthState'

const Account = () => {
  const { user } = useAuthState()

  return (
    <div>
      <h1>{`Account: ${user.email}`}</h1>
      <PasswordResetForm />
      <PasswordChangeForm />
    </div>
  )
}

export default Account
