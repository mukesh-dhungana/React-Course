import React, { Component } from "react";
import PropTypes from "prop-types";
import User from "./User";

class Users extends Component {
  state = {
    title: "fdfd",
    mounted: false,
    name: "dadad",
    email: "ddsdsd",
    mount: true,
  };
  componentDidMount() {
    // console.log("did mount");
    this.setState((prevState) => ({
      ...prevState,
      title: "fdfdfdfd",
      mounted: true,
    }));
    // this.apiRequest().then((data) => {
    //   if (mounted) this.setState({ data });
    // });

    //throw new Error("Error occured");
  }
  // componentWillUnmount(){
  //   this.setState({mounted:false})
  //   // document.removeEventListener(this.hover);
  //   // clearTimeout();
  // }
  // getSnapshotBeforeUpdate() {
  //   return { title: "new title" };
  // }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("did update");
    // if (prevState.title !== this.state.title)
    //   this.setState({ title: snapshot.title });
    // if (prevProps.title !== this.props.title) {
    //   this.setState({ title: this.props.title });
    // }
    //this.setState({title:"dsds"})
  }
  handleCLick = () => {
    this.setState({ title: "dsd", mount: false }, () =>
      console.log(this.state.title)
    );
    //this.fetch();
  };

  // fetch() {
  //   let title = this.state.title;
  // }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={() => this.setState({ mount: false })}>dsds</button>
        {this.state.mount && <User />}
      </div>
    );
  }
}

Users.defaultProps = {
  title: "This is default title",
};
Users.propTypes = {
  title: PropTypes.oneOf(["A", "B"]).isRequired,
};
export default Users;
