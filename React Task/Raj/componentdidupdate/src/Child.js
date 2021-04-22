import React, { Component } from "react";
import "./App.css";
import axios from "axios";

let isMounted = true;
let source = axios.CancelToken.source();
export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      fetchdata: [],
      url: `http://hn.algolia.com/api/v1/search?query=react`,
      loading: false,
    };
    source = axios.CancelToken.source();
  }
  fetchData = () => {
    this.props.handleLoad(true);
    setTimeout(() => {
      axios
        .get(this.state.url, { CancelToken: source.token })

        .then(result => {
          if (isMounted) {
            console.log("Data Fetched");
            this.setState({ fetchdata: result.hits, loading: false });
          }
        })

        .catch(err => {
          console.log(err.message);
        });
      this.props.handleLoad(false);
    }, 3000);
  };
  componentWillUnmount() {
    console.log("unmounted");
    isMounted = false;
  }

  componentDidUpdate(prevsProps) {
    if (prevsProps.data !== this.props.data) {
      this.setState({
        data: this.props.data,
      });
    }
  }
  deleteData = id => {
    let arr = this.state.data.filter(el => el.id !== id);
    this.setState({ data: arr });
    this.props.handleRemoveRow(id);
  };

  render() {
    return (
      <>
        <div>
          <table border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>

            {this.state.data.map(x => (
              <tbody key={x.id}>
                <tr>
                  <td>{x.id}</td>
                  <td>{x.name}</td>
                  <td>{x.address}</td>
                  <td>
                    <button onClick={() => this.deleteData(x.id)}>
                      Delete
                    </button>
                  </td>
                  <td>
                    <button onClick={this.fetchData}>Load API</button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </>
    );
  }
}
