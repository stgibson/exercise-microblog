import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "./Title";

/**
 * Component for displaying list of posts
 * @returns JSX code for rendering post list
 */
const TitleList = () => {
  const posts = useSelector(store => store.posts);

  return (
    <Row>
      {
        Object.keys(posts).map(postId => (
          <Col key={ uuid() } xs={ 6 }><Title id={ postId } post={ posts[postId] } /></Col>
        ))
      }
    </Row>
  );
};

export default TitleList;