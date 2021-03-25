import React from 'react'
import './App.css';
import { connect } from 'react-redux'
import Post from './components/Post';
function App(props) {
  return (
    <div className="App">
      {
        props.posts.map(post => (
          <Post key={post.id} {...post} />
        ))
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return { posts: state.posts }
}

export default connect(mapStateToProps)(App);
