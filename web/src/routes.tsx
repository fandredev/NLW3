import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import OrphanagesMap from './pages/OrphanagesMap'
import Orphanage from './pages/Orphanage'
import CreateOrphanage from './pages/CreateOrphanage'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import ExcludeOrphanage from './components/ExcludeOrphanage'
import DashboardUser from './pages/DashboardUser'

function Routes(){
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/app" component={OrphanagesMap} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route path="/exclude-orphanage" component={ExcludeOrphanage} />
          <Route path="/dashboard" component={DashboardUser} />

          <Route path="/orphanages/create" component={CreateOrphanage} />
          <Route path="/orphanages/:id" component={Orphanage} />

      </Switch>
    </BrowserRouter>
  )
}

export default Routes
