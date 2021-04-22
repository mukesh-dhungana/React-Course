import React, { useState } from "react";
import { withRouter } from "react-router";
import { EDIT_USER } from "../../actionTypes";

function UserDetail(props) {
    const [newinfo, setNewInfo] = useState({ name: "", address: "" });
    const [edit, setEdit] = useState(false);

    const userDetail = props?.location?.state?.user;

    const handleChange = (e) => {
        setNewInfo((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleEdit = (e) => {
        e.preventDefault();
        props.dispatch({ type: EDIT_USER, payload: newinfo });
        props.history.push("/all-users");
    };
    const handleEditForm = () => {
        setEdit(!edit);
        setNewInfo(userDetail);
    };

    return (
        <div>
            <h2>User detail:</h2>
            <h3>ID: {userDetail.id}</h3>
            <h3>Name: {userDetail.name}</h3>
            <h3>Address: {userDetail.address}</h3>
            <button onClick={handleEditForm}>Edit Info</button>
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
