import React from 'react'
import {withRouter} from 'react-router-dom'

const Homepage = ({isLogin, history}) => {

    const logout = () => {
        console.log('check', history);
        history.push('/');
        isLogin(false);
    }

    return (
        <div>
            <h1>This is HomePage</h1>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default withRouter(Homepage)
