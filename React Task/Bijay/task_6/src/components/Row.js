import React from "react";

const Row = ({user}) => {
  return (
    <tr>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      
    </tr>
  );
};

export default Row;
