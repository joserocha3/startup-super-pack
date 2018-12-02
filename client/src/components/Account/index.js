import React from 'react'

import Firebase from '../Firebase'
import { PasswordResetForm } from '../PasswordReset'
import PasswordChangeForm from '../PasswordChangeForm'

const Account = () => (
  <Firebase>
    {({ auth }) => (
      <div>
        <h1>{`Account: ${auth.user.email}`}</h1>
        <PasswordResetForm />
        <PasswordChangeForm />
      </div>
    )}
  </Firebase>
)

export default Account
