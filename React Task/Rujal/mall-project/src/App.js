import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import './App.css';
import { ProtectedRoute } from './Components/ProtectedRoute';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Main from './Pages/Main';
import MallForm from './Components/Mall/MallForm';
import MallList from './Pages/MallList';
import ShopList from './Pages/ShopList';
import MallDetail from './Pages/MallDetail'
import ShopDetail from './Pages/ShopDetail'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" render={props => !localStorage.getItem("user_token") ?
          <Login {...props} />
          :
          <Redirect to={{ pathname: "/dashboard", state: { from: props.location } }} />} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <ProtectedRoute path="/addMall" component={MallForm} />
        <ProtectedRoute path="/malls" component={MallList} />
        <ProtectedRoute path="/shops" component={ShopList} />
        <ProtectedRoute exact path="/:id" component = {MallDetail} />
        <ProtectedRoute path="/:id/editMall" component={MallForm} />
        <ProtectedRoute path = "/:shop_name" component ={ShopDetail}/>
      </Switch>
    </Router>
  );
}

export default App;
