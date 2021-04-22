import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Login';
import { users } from './Components/Users'
function App() {
  const [auth, setAuth] = React.useState(false)
  const [userDetail, setDetail] = React.useState({})
  const [error, setError] = React.useState(null)

  const login = (e) => {
    e.preventDefault()
    const target = e.target
    const username = target.username.value
    const password = target.password.value
    const userMatch = x => x.username === username && x.password === password

    const checkAuth = users.some(userMatch)
    if (checkAuth) {
      setAuth(true)
      e.target.reset()
      setDetail(users.find(userMatch))
      setError(null)
    } else {
      setError("Invalid Username or password")
    }

  }

  const logout = () => { setAuth(false); setDetail({}) }

  return (
    <div className="App">
      {error}
      <Router>
        <Switch>
          <Route path="/home">
            <Home logout={logout} {...userDetail} auth={auth} />
          </Route>
          <Route path="/login">
            <Login login={login} auth={auth} />
          </Route>
          <Redirect from ="/" to="/login" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
