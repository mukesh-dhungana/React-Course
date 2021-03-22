import React from 'react'
import { useHistory } from 'react-router'

const getId = (data) => data.reduce((a, c) => a > c.id ? a : c.id, 0) + 1

function Users({ state, dispatch }) {
    const history = useHistory()
    return (
        <div className="users">
            <div>
                <h1>Add User</h1>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    dispatch({ type: "ADD_USER", payload: { id: getId(state.users), name: e.target.name.value } })
                    e.target.reset()
                }}>
                    <input type="text" name="name" />
                    <input type="submit" name="Submit" />
                </form>

            </div>
            <h1>List user</h1>
            <table>
                <thead>
                    <tr>
                        <th>SN</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {state.users.map(x => (
                        <tr key={x.id}>
                            <td>{x.id}</td>
                            <td>{x.name}</td>
                            <td>
                                <button onClick={() => history.push('/users/' + x.id)}>Detail</button>
                                <button onClick={() => dispatch({ type: "DELETE_USER", payload: x.id })}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Users
