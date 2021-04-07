import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Title.css";

/**
 * Component for displaying a card with a post's title and description, and a
 * link to the post view page for the post
 * @param {Object{string|Object{string|Array[string]}}} param0 
 * @returns JSX code for rendering post title and description card
 */
const Title = ({ id, post }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Text>
          <Link to={ `/${id}` }>{ post.title }</Link>
          <br />
          <i className="Title-description">{ post.description }</i>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Title;