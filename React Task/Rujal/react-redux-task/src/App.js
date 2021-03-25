import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import { ProtectedApp, ProtectedSignIn } from './ProtectedRoute'
import { connect } from 'react-redux'
import { fetchData } from './redux/action'



function App(props) {
  const [auth, setAuth] = React.useState(false)
  const [id, setId] = React.useState(null)
  const { fetchData } = props

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  const logOut = () => {
    setAuth(false)
    setId(null)
  }



  const logIn = (e) => {
    e.preventDefault();
    const userCheck = props.users.some(x => x.username === e.target.username.value)

    if (userCheck) {
      const userDetail = props.users.find(x => x.username === e.target.username.value)
      setAuth(true)
      setId(userDetail.id)
    }
    e.target.reset()

  }


  return (
    <div className="App">
      <Router>
        <Switch>
          <ProtectedSignIn exact path="/" component={Login} logIn={logIn} auth={auth} />
          <ProtectedApp path="/home" component={Home} auth={auth} logOut={() => logOut()} id={id} />
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = ({ users, isFetching }) => {
  return { users, isFetching }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
