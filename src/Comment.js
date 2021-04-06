import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Comment.css";

/**
 * Component for displaying a comment
 * @param {Object{string}} param0 
 * @returns JSX code for rendering a comment
 */
const Comment = ({ comment }) => {
  return (
    <div className="Comment">
      <FontAwesomeIcon icon={ faTimes } color="red" /><span>{ comment }</span>
    </div>
  );
};

export default Comment;