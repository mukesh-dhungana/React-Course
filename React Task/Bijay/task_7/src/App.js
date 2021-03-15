import "./App.css";
import Post from "./components/Post";

function App() {
  return (
    <div className="main-container">
      <div className="container">
        <section className="posts-container">
          <div className="post-container">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
