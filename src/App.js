import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './page/login/index'
import Register from './page/register/index'
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
        <Route path="/home-user">
          <Navbar />
        </Route>
      </Switch>

    </BrowserRouter>
  )
}

export default App