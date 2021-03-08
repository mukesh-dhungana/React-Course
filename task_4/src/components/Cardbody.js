import React, { Component } from "react";
import Card from "./Card";
import Spinner from "./Spinner";
// import Modal from "./Modal";

//***FETCH TASKS FROM API
const fetchPosts = async (url) => {
  const res = await fetch(`http://localhost:5000/${url}`);

  const data = await res.json();

  return data;
};
class Cardbody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    const getPosts = async (url) => {
      const postsFromServer = await fetchPosts(url);
      //console.log(postsFromServer);
      this.setState({ posts: postsFromServer, isLoading: false });
    };
    getPosts(this.props.url);
  }

  componentDidUpdate(props, state) {
    console.log("prop", props, "state", state);
    const getPosts = async (url) => {
      this.setState({ isLoading: true });

      const postsFromServer = await fetchPosts(url);
      //console.log(postsFromServer);
      setTimeout(() => {
        this.setState({ posts: postsFromServer, isLoading: false });
      }, 600);
    };
    if (props.url !== this.props.url || this.state.posts.length === 0) {
      getPosts(this.props.url);
    }
  }

  render() {
    const { posts } = this.state;
    // const { url } = this.props;
    console.log("isLoading=>", this.state.isLoading);

    return this.state.isLoading ? (
      <Spinner />
    ) : (
      <div className="wrapper">
        {posts.map((post) => {
          return <Card key={post.id} post={post} />;
        })}
        {/* <h1>Hello</h1> */}
      </div>
    );
  }
}

export default Cardbody;
