import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './component/Login'
import Register from './component/Register'
import Dashboard from './component/Dashboard'
import Navbar from './component/Navbar'
import NavbarLogin from './component/NavLogin'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <NavbarLogin />
          <Login />
        </Route>
        <Route path="/register">
          <NavbarLogin />
          <Register />
        </Route>
        <Route path="/dashboard">
          <Navbar />
          <Dashboard />
        </Route>
      </Switch>

    </BrowserRouter>
  )
}

export default App