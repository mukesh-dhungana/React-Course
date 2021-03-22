import React from 'react'
import { useParams } from 'react-router'

function User({ state, dispatch }) {
    const { id } = useParams()
    const user = state.users.find(x => x.id === +id)
    const [name, setName] = React.useState(user.name)
    return (
        <div className="user">
            <h2>ID: {user.id}</h2>
            <h3>Name: {user.name}</h3>

            <form onSubmit={(e) => {
                e.preventDefault()
                dispatch({ type: "EDIT_USER", payload: { ...user, name: name } })
            }}>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default User
