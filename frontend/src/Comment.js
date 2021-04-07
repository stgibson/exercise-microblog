import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { deleteCommentInAPI } from "./actions";
import "./Comment.css";

/**
 * Component for displaying a comment
 * @param {Object{string}} param0 
 * @returns JSX code for rendering a comment
 */
const Comment = ({ postId, commentId, comment }) => {
  const dispatch = useDispatch();

  /**
   * Uses dispatch to delete comment
   */
  const handleDeleteComment = () => {
    dispatch(deleteCommentInAPI(postId, commentId));
  };

  return (
    <div className="Comment">
      <FontAwesomeIcon icon={ faTimes } color="red" onClick={ handleDeleteComment } /><span>{ comment }</span>
    </div>
  );
};

export default Comment;