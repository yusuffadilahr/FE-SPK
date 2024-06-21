import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './page/login/index'
import Register from './page/register/index'
import Navbar from './component/Navbar'
import NavbarLogin from './component/NavLogin'
import HomeUser from './page/home-user/index'

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
          <HomeUser />
        </Route>
      </Switch>

    </BrowserRouter>
  )
}

export default App