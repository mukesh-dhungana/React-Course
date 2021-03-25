import React from 'react';
import { useHistory } from 'react-router';

const getId = (data) => data.reduce((acc, cur) => acc > cur.id ? acc : cur.id, 0) + 1

function Users({state, dispatch}) {
    const history = useHistory();
    return (
        <div className = "users">
            <div>
                <h2>Add Users</h2>
                <form onSubmit = {(event) => {
                    event.preventDefault();
                    dispatch({type : "ADD", payload: { id: getId(state.user), name: event.target.name.value}})
                }}>
                    <input type = "text" name = "name"/>
                    <input type = "submit" name = "Submit"/>
                </form>
                <h3>Users List</h3>
                <table>
                    <thead>
                        <tr>
                            <th>S.N</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state?.user?.map((user) => (
                            <tr>
                                <td>
                                    <button onClick = {() => history.push('./users' + user.id)}>Detail</button>
                                    <button onClick = {() => dispatch({type: "DELETE", payload: user.id})}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users;
