import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Parent from './Components/Parent';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Parent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
