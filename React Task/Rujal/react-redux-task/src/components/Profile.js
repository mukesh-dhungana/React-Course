import React from 'react'

function Profile(props) {

    return (
        <div>
            <h1>Profile</h1>
            <h2>{props.username}</h2>
            <h3>{props.name}</h3>
            <h4>{props.email}</h4>
        </div>
    )
}

export default Profile
