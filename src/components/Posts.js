import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Posts = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {console.log(props.match.params)}
      {props.ListPosts.filter(
        (post) => post.userId === Number(props.match.params.id)
      ).map((post, i) => (
        <Card
          border="primary"
          style={{ width: "18rem" }}
          key={i}
          className="mt-2"
        >
          <Card.Header>Post</Card.Header>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
          </Card.Body>
          <Link to={`/posts/${post.userId}/comment/${post.id}`}>
            View Post's Comments
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default Posts;
