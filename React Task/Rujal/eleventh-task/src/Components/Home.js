import React from 'react'
import { Link, Route, Switch, useRouteMatch, Redirect } from 'react-router-dom'
import About from './About';
import Contact from './Contact';

function Home(props) {
    const { url, path } = useRouteMatch()
    if (!props.auth) {
        return <Redirect to="/login" />
    }
    return (
        <div>
            <h1>
                {props.name}
            </h1>
            <Link to={`${url}/about`}>About</Link>
            <Link to={`${url}/contact`}>Contact</Link>

            <button onClick={() => props.logout()}>Logout</button>
            <Switch>
                <Route path={`${path}/about`} component={About} />
                <Route path={`${path}/contact`} component={Contact} />
            </Switch>

        </div>
    )
}

export default Home
