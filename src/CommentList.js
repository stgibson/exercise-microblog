import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Comment from "./Comment";

/**
 * Component for displaying list of comments and form to add a comment
 * @param {Array[string]} param0 
 * @returns JSX code for rendering list of comments
 */
const CommentList = ({ comments }) => {
  const [newComment, setNewComment] = useState("");

  /**
   * Updates newComment when user types in input
   * @param {Object{any}} evt 
   */
  const handleChange = evt => {
    const { value } = evt.target;
    setNewComment(value);
  };

  /**
   * Adds newComment to list of post's comments
   * @param {Object} evt 
   */
  const handleSubmit = evt => {
    evt.preventDefault();
  };

  return (
    <>
      <h3>Comments</h3>
      {
        comments &&
          comments.map(comment => <Comment comment={ comment } />)
      }
      <Form>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="New Comment"
            onChange={ handleChange }
            value={ newComment }
          />
          <Button className="mt-3 py-1" variant="primary">Add</Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default CommentList;