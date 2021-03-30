import React from "react";
import {withRouter} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {fetchUsers, toggleLoading} from './UsersSlice'
const Home = ({history}) => {

  const dispatch = useDispatch()
  const handleUsersClick = () => {
    console.log("Users Clicked");
    dispatch(toggleLoading());
    dispatch(fetchUsers());
    history.push('/users')
  };

  return (
    <div className="btn-wrapper">
      <div className="btn-container">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleUsersClick}
        >
          USERS
        </button>
      </div>
    </div>
  );
};

export default withRouter(Home);
