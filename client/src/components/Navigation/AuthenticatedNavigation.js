import React from 'react'
import { Link } from '@reach/router'

import { SignOutButton } from '../SignOut'
import ROUTES from '../../constants/routes'

const AuthenticatedNav = ({ admin }) => (
  <ul>
    <li><Link to={ROUTES.LANDING}>Landing</Link></li>
    <li><Link to={ROUTES.HOME}>Home</Link></li>
    <li><Link to={ROUTES.ACCOUNT}>Account</Link></li>
    <li><Link to={ROUTES.EQUIPMENT}>Equipment</Link></li>
    <li><Link to={ROUTES.LISTINGS}>Listings</Link></li>
    {admin && <li><Link to={ROUTES.USERS}>Users</Link></li>}
    {admin && <li><Link to={ROUTES.EQUIPMENT_TYPES}>Equipment Types</Link></li>}
    <li><SignOutButton /></li>
  </ul>
)

export default AuthenticatedNav
