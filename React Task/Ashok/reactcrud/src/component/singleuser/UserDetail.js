import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { EDIT_USER } from "../../actionTypes";

function UserDetail(props) {
    const [newinfo, setNewInfo] = useState({ name: "", address: "" });
    const [edit, setEdit] = useState(false);

    const userDetail = props.users.find(
        (item) => item.id === +props.match.params.id
    );
    useEffect(() => {
        setNewInfo(userDetail);
    }, []);

    const handleChange = (e) => {
        setNewInfo((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleEdit = (e) => {
        e.preventDefault();
        props.dispatch({ type: EDIT_USER, payload: newinfo });
        console.log(newinfo);
        props.history.push("/all-users");
    };

    return (
        <div>
            <h2>User detail:</h2>
            <h3>ID: {userDetail.id}</h3>
            <h3>Name: {userDetail.name}</h3>
            <h3>Address: {userDetail.address}</h3>
            <button onClick={() => setEdit(!edit)}>Edit Info</button>
            {edit && (
                <form onSubmit={handleEdit}>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={handleChange}
                        value={newinfo.name}
                    />
                    <input
                        type="text"
                        name="address"
                        id="address"
                        onChange={handleChange}
                        value={newinfo.address}
                    />
                    <button type="submit">Edit</button>
                </form>
            )}
            <button onClick={() => props.history.push("/all-users")}>
                BACK TO HOME
            </button>
        </div>
    );
}

export default withRouter(UserDetail);
