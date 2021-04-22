import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import {
  deleteUserService,
  getAllUserService,
  usersCollectionReference,
} from "../../services/databaseServices";
import { deleteUserProfileImage } from "../../services/storeServices";
import notificaiton from "../../utils/notification";

function AllUsers({ history }) {
  console.log(history);
  const [isLoading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUserService()
      .then((snaps) => {
        let users = [];
        snaps.forEach((snap) => {
          users.push({ id: snap.id, ...snap.data() });
        });
        // debugger;
        setUsers(users);
      })
      .catch((err) => notificaiton.showError("Could not load data"))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const unsubscribe = () => {
      usersCollectionReference().onSnapshot((querySnapshot) => {
        var allUsers = [];
        querySnapshot.forEach((doc) => {
          allUsers.push({ id: doc.id, ...doc.data() });
        });
        setUsers(allUsers);
      });
    };
    unsubscribe();
    return unsubscribe;
  }, []);

  const handleDelete = (userId, userPhotoId) => {
    deleteUserService(userId)
      .then((res) => notificaiton.showInfo("user sucessfully removed"))
      .catch((err) =>
        notificaiton.showError("user delete opreation failed.try again")
      );
    deleteUserProfileImage(userPhotoId).catch((err) =>
      notificaiton.showError("could not delete photo of user")
    );
  };

  return (
    <div className="m-5 ">
      <h3 className="text-center">List of our all users</h3>
      {isLoading ? (
        <Loading />
      ) : (
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length
              ? users.map((item, i) => (
                  <tr key={item?.id}>
                    <th scope="row">{i + 1}</th>
                    <td>{item?.username}</td>
                    <td>{item?.email}</td>
                    <td
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                      }}
                    >
                      <button
                        className="btn btn-info"
                        onClick={() =>
                          history.push(`/user/${item?.id}`, { ...item })
                        }
                      >
                        Check Profile
                      </button>
                      |
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(item.id, item.photoName)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              : "no users"}
          </tbody>
        </table>
      )}{" "}
    </div>
  );
}

export default AllUsers;
