import React from 'react'
import { Route, Redirect,withRouter } from 'react-router-dom'
const PrivateRoute = ({component: Component, ...rest}:any) => (
  <Route {...rest} render={(props) => (
    true ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: {from: props.location}}}/>
  )}/>
)

export default withRouter(PrivateRoute)