import React from "react";
import { Card } from "react-bootstrap";
const Comment = (props) => {
  return (
    <div>
      {props.ListComments.filter(
        (comment) => comment.postId === Number(props.match.params.id)
      ).map((comment, i) => (
        <Card className="text-center">
          <Card.Header>{comment.email}</Card.Header>
          <Card.Body>
            <Card.Title>{comment.name}</Card.Title>
            <Card.Text>{comment.body}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Comment;
