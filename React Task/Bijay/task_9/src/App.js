import { Switch, Route, Redirect } from 'react-router-dom'
import {useReducer} from 'react'

import './App.css';
import Home from './Home';
import User from './User';
import Users from './Users';
import {initialUsers, reducer} from './Reducer'

const App = () => {


  const [state, dispatch] = useReducer(reducer, initialUsers)

  return (
    <div className="App">
        {/* <tt>This is typewriter text</tt> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" render={()=> <Users state={state} dispatch={dispatch} />} />
        <Route  path="/users/:id" render={() => <User users={state.users} />} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
