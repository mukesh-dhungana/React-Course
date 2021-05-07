import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { PostsProvider } from "./context/postsContext";

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <PostsProvider>
        <App />
      </PostsProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
