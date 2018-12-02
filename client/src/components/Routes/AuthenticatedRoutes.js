import React from 'react'
import { Router, Redirect } from '@reach/router'

import ROUTES from '../../constants/routes'

const Landing = React.lazy(() => import('../Landing'))
const Home = React.lazy(() => import('../Home'))
const Account = React.lazy(() => import('../Account'))
const Admin = React.lazy(() => import('../Admin'))

const AuthenticatedRoutes = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Router>
      <Landing path={ROUTES.LANDING} />
      <Home path={ROUTES.HOME} />
      <Account path={ROUTES.ACCOUNT} />
      <Admin path={ROUTES.ADMIN} />
      <Redirect from="*" to="home" noThrow default />
    </Router>
  </React.Suspense>
)

export default AuthenticatedRoutes
