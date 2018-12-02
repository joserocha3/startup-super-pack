import React from 'react'

import SignInForm from './SignInForm'
import { PasswordResetLink } from '../PasswordReset'

const SignIn = () => (
  <div>
    <h1>Sign In</h1>
    <SignInForm />
    <PasswordResetLink />
  </div>
)

export default SignIn
