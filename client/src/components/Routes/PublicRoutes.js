import React from 'react'
import { Router } from '@reach/router'

import ROUTES from '../../constants/routes'

const Landing = React.lazy(() => import('../Landing'))
const SignIn = React.lazy(() => import('../SignIn'))
const PasswordReset = React.lazy(() => import('../PasswordReset'))

const PublicRoutes = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Router>
      <Landing path={ROUTES.LANDING} />
      <SignIn path={ROUTES.SIGN_IN} />
      <PasswordReset path={ROUTES.PASSWORD_RESET} />
      <SignIn default />
    </Router>
  </React.Suspense>
)

export default PublicRoutes
