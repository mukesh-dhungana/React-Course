import React from "react";
import Row from './Row'

const FormDisplay = ({ users }) => {
  return (
    <div className="form-display">
      <div className="table100-firstcol">
        <table className="table">
          <thead className="table-header">
            <tr>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Email Id</td>
            </tr>
          </thead>
          <tbody className="table-body">
            {users.length > 0 ? (
              users.map((user, idx) => (
                <Row key={idx} user={user}   />
              ))
            ) : (
              <tr>
                <td colSpan={4}>No user Found to Display</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormDisplay;
