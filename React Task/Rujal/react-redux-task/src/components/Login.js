import React from 'react'

function Login(props) {
    return (
        <div>
            <form onSubmit={props.logIn}>
                <input type="text" name="username" placeholder="Username" />
                {/* <input type="password" name="password" placeholder="Password" /> */}
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Login
