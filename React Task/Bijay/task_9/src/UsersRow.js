import React from "react";
import { withRouter } from "react-router-dom";
const UsersRow = ({ user, history }) => {
  const handleUserClick = () => {
    console.log("Clicked");
    history.push(`/users/${user.id}`);
  };

  return (
    <>
      <tr className="table-active">
        <th scope="row">{user.id}</th>
        <td>{user.role}</td>
        <td onClick={handleUserClick} className="link"><cite>{user.fullName}</cite></td>
        <td>{user.email}</td>
        <td>{user.address}</td>
        <td className="dlt-icon">
          <i className="fas fa-trash"></i>
        </td>
      </tr>
    </>
  );
};

export default withRouter(UsersRow);
