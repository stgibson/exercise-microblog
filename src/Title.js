import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Title.css";

/**
 * Component for displaying a card with a post's title and description, and a
 * link to the post view page for the post
 * @param {Object{string|Object{string}}} param0 
 * @returns JSX code for rendering post title and description card
 */
const Title = ({ id, post }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Text>
          <Link to={ `/${id}` }>{ post.title }</Link>
          <div className="Title-description"><i>{ post.description }</i></div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Title;