import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { edit } from "./redux/actionCreators";
import "./App.css";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [showEditForm, setShowEditForm] = useState(false);
  const [userUpdate, setUserUpdate] = useState(user);

  return (
    <div className="App">
      <div>
        <h2>User Details:</h2>
        <label>
          <b>Name: </b>
        </label>
        <p>{user.name}</p>
        <label>
          <b>Email:</b>{" "}
        </label>
        <p>{user.email}</p>
        <label>
          <b>Addres</b>s:{" "}
        </label>
        <p>{user.address}</p>
        <label>
          <b>Phone:</b>{" "}
        </label>
        <p>{user.phone}</p>
        <button type="button" onClick={() => setShowEditForm(true)}>
          Edit Details
        </button>
      </div>
      {showEditForm && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(edit(userUpdate));
          }}
        >
          <label>
            <b>Name: </b>
          </label>
          <input
            type="input"
            value={userUpdate.name}
            onChange={(e) =>
              setUserUpdate({ ...userUpdate, name: e.target.value })
            }
          />
          <br />
          <label>
            <b>Email:</b>{" "}
          </label>
          <input
            type="input"
            value={userUpdate.email}
            onChange={(e) =>
              setUserUpdate({ ...userUpdate, email: e.target.value })
            }
          />
          <br />
          <label>
            <b>Addres</b>s:{" "}
          </label>
          <input
            type="input"
            value={userUpdate.address}
            onChange={(e) =>
              setUserUpdate({ ...userUpdate, address: e.target.value })
            }
          />
          <br />
          <label>
            <b>Phone:</b>{" "}
          </label>
          <input
            type="input"
            value={userUpdate.phone}
            onChange={(e) =>
              setUserUpdate({ ...userUpdate, phone: e.target.value })
            }
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default App;
