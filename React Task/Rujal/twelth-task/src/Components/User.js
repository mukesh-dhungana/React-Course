import React from 'react'
import { useParams } from 'react-router-dom'

function User({ state, dispatch, ...rest }) {
    const { id } = useParams()
    const user = state.users.find(x => x.id === +id)
    const [name, setName] = React.useState(user.name)

    return (
        <div className="user">
            <h2>ID: {user.id}</h2>
            <h3>Name: {user.name}</h3>

            <form onSubmit={(e) => {
                e.preventDefault()
                if (name.length>0) {
                    dispatch({ type: "EDIT_USER", payload: { ...user, name } })
                }
            }}>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default User
