import React, { Component } from "react";
import Row from "../Row/Row";
import "./table.css";
export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableRowData: [
        { id: "1", name: "john", address: "Dharan" },
        { id: "2", name: "Alex", address: "Dhangadhi" },
      ],
    };
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidUpdate({ userDetails }, { tableRowData }) {
    if (userDetails.id !== this.props.userDetails.id) {
      this.setState({
        tableRowData: [...tableRowData, this.props.userDetails],
      });
    }
  }

  handleDelete(id) {
    const arrAfterDelete = this.state.tableRowData.filter(
      (rowData) => rowData.id !== id
    );
    this.setState({ tableRowData: arrAfterDelete });
  }
  render() {
    const { tableRowData } = this.state;

    return (
      <div className="tablediv">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th colSpan="2"></th>
            </tr>
          </thead>
          <tbody>
            {tableRowData.map((rowData) => {
              const controller = new AbortController();
              return (
                <Row
                  key={rowData.id}
                  {...rowData}
                  handleDelete={() => this.handleDelete(rowData.id)}
                  controller={controller}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
