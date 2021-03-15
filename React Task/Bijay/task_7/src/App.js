import "./App.css";
import Post from "./components/Post";
import Data from './Data'

const posts = Data.posts

const App = () => {
  console.log('Data Posts',posts);
  return (
    <div className="main-container">
      <div className="container">
        <section className="posts-container">
          <div className="post-container">
            {/* <Post /> */}
            {posts.map((post) => (
              <Post post={post} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
