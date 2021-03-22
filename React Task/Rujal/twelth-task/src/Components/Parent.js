import React from 'react'
import { useRouteMatch, Switch, Route, Link } from 'react-router-dom'
import User from './User'
import { initialState, reducer } from './useReducer'
import Users from './Users'

function Parent() {
    const { path, url } = useRouteMatch()
    const [state, dispatch] = React.useReducer(reducer, initialState)

    return (
        <div className="parent">
            <Link to={`${url}users`}>List</Link>
            <Switch>
                <Route exact path={`${path}users`}>
                    <Users state={state} dispatch={dispatch} />
                </Route>
                <Route path={`${path}users/:id`}>
                    <User  state={state} dispatch={dispatch} />
                </Route>
            </Switch>
        </div>
    )
}

export default Parent
