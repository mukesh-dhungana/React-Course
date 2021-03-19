import React from 'react'

const ErrorPage = ({history}) => {
    return (
        <div>
            <h1>This is Error Page</h1>
            <button onClick={() => history.push('/')} > Go to Home</button>
        </div>
    )
}

export default ErrorPage
