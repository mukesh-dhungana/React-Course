import React from "react";

const Row = ({user, onDelete}) => {
  return (
    <tr>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td onClick={onDelete}><i class="fas fa-trash"></i></td>
    </tr>
  );
};

export default Row;
