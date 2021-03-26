import "./App.css";
import Post from "./components/Post";

import { useState } from "react";
import ToogleMode from "./components/ToogleMode";
import { connect } from "react-redux";

const App = props => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMe = () => {
    console.log("Dark Mode");
    setDarkMode(!darkMode);
  };

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
              <Post post={post} />
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
