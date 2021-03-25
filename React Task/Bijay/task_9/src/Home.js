import React from "react";
import {withRouter} from 'react-router-dom'
const Home = ({history}) => {
  const handleUsersClick = () => {
    console.log("Users Clicked");
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
