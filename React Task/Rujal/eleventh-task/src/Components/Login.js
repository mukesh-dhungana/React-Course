import React from 'react'
import { Link, Redirect } from 'react-router-dom'

function Login(props) {

    if(props.auth){
        return <Redirect to="/home"/>
    }
    
    return (
        <div>
            <form onSubmit={props.login}>
                <input type="text" name="username" placeholder="Username"/>
                <input type="password" name="password" placeholder="Password"/>
                <input type="submit" value="login"/>
            </form>
            <Link to="/home/about">About</Link>
        </div>
    )
}

export default Login
