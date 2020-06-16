import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import imgUser from "./user.png";
import { Link } from "react-router-dom";

const Users = ({ ListUsers }) => {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {ListUsers.map((user, i) => (
        <Link to={`/posts/${user.id}`}>
          <Card
            style={{
              width: "18rem",
              height: "25rem",
              marginRight: "30px",
              marginBottom: "20px",
              marginTop: "30px",
              backgroundColor: "white",
              borderRadius: "8px",
              border: "transparent",
              boxShadow: "0 10px 10px 0 rgba(0,0,0,0.2)",
            }}
          >
            <Card.Header
              style={{
                borderTopRightRadius: "8px",
                borderTopLeftRadius: "8px",
                backgroundColor: "#277FA5",
                height: "13rem",
              }}
            />
            <Col>
              <Image
                src={imgUser}
                roundedCircle
                style={{
                  height: "150px",
                  width: "150px",
                  position: "relative",
                  bottom: "80px",
                  border: "10px solid white",
                  backgroundColor: "transparent",
                }}
              />
            </Col>
            <Card.Body style={{ position: "relative", bottom: "90px" }}>
              <Card.Title style={{ margin: "0", color: "#505151" }}>
                {user.name}
              </Card.Title>
              <Card.Text style={{ fontSize: "small", color: "#4BAED4" }}>
                {user.email}
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Users;
