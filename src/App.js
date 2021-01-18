import React from 'react'
import Home from './components/Home'
import News from './components/News'
import Profile from './components/Profile'
import Login from './components/Login'
import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom"
const App = () => {

  const isLogged = useSelector(state => state.isLogged)

  return (
    <Router>
      <header className="header">
        <div className="header-wrapper">
          <nav className="navigation">
            <Link className="nav-link" to="/">На главную</Link>
            <Link className="nav-link" to="/news">Новости</Link>
            <Link className="nav-link" to="/profile">Профиль</Link>
          </nav>
        </div>
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/news">
          <News />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/profile">
          {isLogged ? <Profile /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
