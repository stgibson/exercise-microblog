import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

/**
 * Component for displaying form to add or edit a post
 * @returns JSX code for rendering form
 */
const PostForm = () => {
  return (
    <>
      <Form>
        <Form.Group controlId="title">
          <Form.Label>Title:</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description:</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="body">
          <Form.Label>Body:</Form.Label>
          <Form.Control as="textarea" rows={10} />
        </Form.Group>
      </Form>
      <Link to="/">
        <Button className="mr-2 py-1" variant="primary">Save</Button>
      </Link>
      <Link to="/">
        <Button className="py-1" variant="secondary">Cancel</Button>
      </Link>
    </>
  );
};

export default PostForm;