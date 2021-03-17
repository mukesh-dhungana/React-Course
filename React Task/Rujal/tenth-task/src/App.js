import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Posts from './Components/Posts'
import Nav from './Components/Nav'
import Post from './Components/Post'
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/posts" component={Posts} />
          <Route path="/post/:id" component={Post} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
