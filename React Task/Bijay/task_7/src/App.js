import "./App.css";
import Post from "./components/Post";
import Data from './Data'
import { initialState, reducer } from './Reducer'
import {useReducer} from 'react'

// const posts = Data.posts

const App = () => {
  // console.log('Data Posts',posts);

  const [state, dispatch] = useReducer(reducer, initialState)

  // const posts = state.posts
  return (
    <div className="main-container">
      <div className="container">
        <section className="posts-container">
          <div className="post-container">
            {/* <Post /> */}
            {state.posts.map((post) => (
              <Post post={post} dispatch={dispatch} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
