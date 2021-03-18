import { Component } from "react";

import Cardbody from "./components/Cardbody";
import Form from "./components/Form";
import FormDisplay from "./components/FormDisplay";


// //***FETCH TASKS FROM API
// const fetchPosts = async () => {
//   const res = await fetch("http://localhost:5000/posts");

//   const data = await res.json();

//   return data;
// };
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      fetchData: false,
      
    };
  }

  // componentDidUpdate() {
  //   const getPosts = async () => {
  //     const postsFromServer = await fetchPosts();
  //     //console.log(postsFromServer);
  //     this.setState({ posts: postsFromServer });
  //   };
  //   if (this.state.fetchData && this.state.posts.length === 0) {
  //     getPosts();
  //     // this.setState({fetchData:false})
  //   }
  // }

  render() {
    // console.log("From App =>", this.state.posts);
    return (
      <div className="container">
        <h3>Select Your Choice</h3>
        <div className="btn-wrapper">
          <button
            className="fetch-btn posts"
            onClick={() => this.setState({ fetchData: true, url:'posts' })}
          >
            Posts
          </button>
          <button
            className="fetch-btn jokes"
            onClick={() => this.setState({ fetchData: true, url:'jokes' })}
          >
            Jokes
          </button>
          <button
            className="fetch-btn users"
            onClick={() => this.setState({ fetchData: true, url:'users' })}
          >
            Users
          </button>
          <button
            className="fetch-btn hide"
            onClick={() => this.setState({ fetchData: false})}
          >
            Hide All
          </button>
        </div>
        
        {this.state.fetchData && <Cardbody url={this.state.url}/>}
        <Form />
        {/* <FormDisplay /> */}
      </div>
    );
  }
}

export default App;
