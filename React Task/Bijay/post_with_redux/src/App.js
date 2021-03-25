import "./App.css";
import Post from "./components/Post";
// import Data from "./Data";
import { initialState, reducer } from "./Reducer";
import { useState, useReducer } from "react";
import ToogleMode from "./components/ToogleMode";
import { Provider, connect } from "react-redux";
// import store from "./store";
// const posts = Data.posts

const App = (props) => {
  // console.log('Data Posts',posts);

  const [state, dispatch] = useReducer(reducer, initialState);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMe = () => {
    console.log("Dark Mode");
    setDarkMode(!darkMode);
  };

  // const posts = state.posts
  return (
    
      <div className="main-container">
        <div className="toggle">
          <ToogleMode toggleMe={toggleMe} />
        </div>
        {darkMode ? <div className="dark-mode"></div> : ""}
        <div className="container">
          <section className="posts-container">
            <div className="post-container">
              {/* <Post /> */}
              {props.ui.map(post => (
                <Post post={post} dispatch={dispatch} />
              ))}
            </div>
          </section>
        </div>
      </div>
  );
};

const mapStateToProps = state => ({
  ui: state.posts,
});

export default connect(mapStateToProps)(App);
