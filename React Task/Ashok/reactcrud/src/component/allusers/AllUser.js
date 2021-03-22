import React from "react";
import { withRouter } from "react-router";
import { ADD_USER, REMOVE_USER } from "../../actionTypes";
import "./style.css";

function AllUser({ users, dispatch, history }) {
    const handleAdd = (e) => {
        e.preventDefault();
        const [name, address, id] = [
            e.target.name.value,
            e.target.address.value,
            +Date.now(),
        ];
        dispatch({ type: ADD_USER, payload: { id, name, address } });
        e.target.reset();
    };
    return (
        <div>
            <h2>List of all the users</h2>
            {users.map(({ id, name }) => (
                <div key={id} className="userdetail">
                    <h4 onClick={() => history.push(`/user/${id}`)}>{name}</h4>
                    <button
                        onClick={() =>
                            dispatch({ type: REMOVE_USER, payload: id })
                        }
                    >
                        Delete
                    </button>
                </div>
            ))}

            <h3>Add user</h3>
            <form onSubmit={handleAdd}>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="add name"
                />
                <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="add address"
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default withRouter(AllUser);
