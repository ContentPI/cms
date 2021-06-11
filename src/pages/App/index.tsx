import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route, useHistory } from 'react-router-dom'
import { GlobalStyles } from '@contentpi/ui-kit'
import Home from '../Home'
import Login from '../Login'

const Index = () => {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

export default Index
