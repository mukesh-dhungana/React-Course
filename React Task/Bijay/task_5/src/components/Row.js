import React, { Component } from "react";

class Row extends Component {

    removeRow = (idx) => {
        this.props.onDelete(idx)
    }

    render() {
    const { user, idx } = this.props;
    return (
      <tr key={idx + 1}>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td className="delete-btn">
          <i className="fas fa-trash delete-icon" onClick={(params) => this.removeRow(idx)}></i>
        </td>
      </tr>
    );
  }
}

export default Row;
