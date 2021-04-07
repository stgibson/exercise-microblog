import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addComment } from "./actions";
import Comment from "./Comment";

/**
 * Component for displaying list of comments and form to add a comment
 * @param {Array[string]} param0 
 * @returns JSX code for rendering list of comments
 */
const CommentList = ({ postId }) => {
  const dispatch = useDispatch();
  const comments = useSelector(store => store.posts[postId].comments);
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
  const handleAddComment = evt => {
    evt.preventDefault();
    const commentId = uuid();
    dispatch(addComment(postId, commentId, newComment));
    setNewComment("");
  };

  return (
    <>
      <h3>Comments</h3>
      {
        Object.keys(comments).map(commentId => (
          <Comment
            key={ uuid() }
            postId={ postId }
            commentId={ commentId }
            comment={ comments[commentId] }
          />
        ))
      }
      <Form onSubmit={ handleAddComment }>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="New Comment"
            onChange={ handleChange }
            value={ newComment }
          />
          <Button className="mt-3 py-1" variant="primary" type="submit">
            Add
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default CommentList;