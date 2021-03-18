import React, { Component } from "react";
import PropTypes from 'prop-types'
import Row from "./Row";

class FormDisplay extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     datas: [],
  //   };
  // }

  // componentDidMount () {
  //     this.setState({data: this.props.data})
  // }

  // componentDidUpdate(prevProps) {
  //   console.log("Previous Prop", prevProps);
  //   console.log("Current Prop", this.props.data);
  //   if (prevProps.users !== this.props.data) {
  //     this.setState({ datas: this.props.data });
  //     console.log("Component update");
  //   }
  // }

  removeRow = (idx) => {
    this.props.removeData(idx)
  }

  render() {
    // console.log("Prop Check", this.props.users);
    // console.log("State Check", this.state);
    const users  = this.props.users;
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
              
              {users.length > 0 ? users.map((data, idx) => (
                <Row user={data} idx={idx} onDelete={this.removeRow}/>
              )) : (
                <tr>
                  <td colSpan={4}>No user Found to Display</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }


  

}

FormDisplay.propTypes = {
    users: PropTypes.array.isRequired
}

FormDisplay.defaultProps = {
  users: [
    {
      firstName: 'Demo fName',
      lastName: 'Demo lName',
      email: 'Demo@email.com'
    }
  ]
}

export default FormDisplay;
