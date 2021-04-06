import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "./Title";
import posts from "./fakeDb.json";

/**
 * Component for displaying list of posts
 * @returns JSX code for rendering post list
 */
const TitleList = () => {
  return (
    <Row>
      {
        Object.keys(posts).map(postId => (
          <Col xs={ 6 }><Title id={ postId } post={ posts[postId] } /></Col>
        ))
      }
    </Row>
  );
};

export default TitleList;