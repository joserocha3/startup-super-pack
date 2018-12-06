import React from 'react'
import { Router, Redirect } from '@reach/router'

import ROUTES from '../../constants/routes'

const Landing = React.lazy(() => import('../Landing'))
const Home = React.lazy(() => import('../Home'))
const Account = React.lazy(() => import('../Account'))
const Users = React.lazy(() => import('../Users'))
const Equipment = React.lazy(() => import('../Equipment'))
const EquipmentTypes = React.lazy(() => import('../EquipmentTypes'))
const Listings = React.lazy(() => import('../Listings'))

const AuthenticatedRoutes = ({ admin }) => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Router>
      <Landing path={ROUTES.LANDING} />
      <Home path={ROUTES.HOME} />
      <Account path={ROUTES.ACCOUNT} />
      <Equipment path={ROUTES.EQUIPMENT} />
      <Listings path={ROUTES.LISTINGS} />
      {admin && <Users path={ROUTES.USERS} />}
      {admin && <EquipmentTypes path={ROUTES.EQUIPMENT_TYPES} />}
      <Redirect from="*" to="home" noThrow default />
    </Router>
  </React.Suspense>
)

export default AuthenticatedRoutes
