import React, { Component } from "react";
import Spin from "./Spinner";

export class Search extends Component {
  constructor() {
    super();
    this.state = { users: [], loading: true };
  }

  componentDidMount = () => {
    fetch("https://randomuser.me/api/?results=100")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data.results, loading: false }));
  };

  filter = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    let users = this.state.users;
    if (this.state.filter) {
      users = users.filter((user) =>
        user.name.first.toLowerCase().includes(this.state.filter.toLowerCase())
      );
    }
    return (
      <div>
        <input type="text" onChange={this.filter.bind(this)} />
        {this.state.loading ? (
          <Spin />
        ) : (
          users.map((user, i) => <Person key={i} person={user} />)
        )}
      </div>
    );
  }
}

const Person = (props) => <p>{props.person.name.first}</p>;

export default Search;
