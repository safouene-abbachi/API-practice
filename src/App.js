import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comment from "./components/Comment";

function App() {
  const [ListUsers, setListUsers] = useState([]);
  const [ListPosts, setListPosts] = useState([]);
  const [ListComments, setListComments] = useState([]);

  const getAllusers = async () => {
    try {
      const res = await axios.get("http://jsonplaceholder.typicode.com/users");
      setListUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllposts = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setListPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllcomments = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setListComments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllusers();
    getAllposts();
    getAllcomments();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Users ListUsers={ListUsers} />}
        ></Route>
        <Route
          exact
          path="/posts/:id"
          render={(props) => <Posts {...props} ListPosts={ListPosts} />}
        ></Route>
        <Route
          path="/posts/:id/comment/:id"
          render={(props) => <Comment {...props} ListComments={ListComments} />}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
