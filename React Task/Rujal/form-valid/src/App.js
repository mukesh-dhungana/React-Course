import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import login from './component/login';
import register from './component/register';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={login} />
          <Route path="/register" component={register} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
