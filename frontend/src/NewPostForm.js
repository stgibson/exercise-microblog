import React from "react";
import { useDispatch } from "react-redux";
import { addPostToAPI } from "./actions";
import PostForm from "./PostForm";

/**
 * Component for displaying form to create a new post
 * @returns JSX code for rendering page to add a new post
 */
const NewPostForm = () => {
  const dispatch = useDispatch();

  /**
   * Uses dispatch to add a post
   * @param {Object{string|Object{string}}} data 
   */
  const handleAddPost = data => {
    dispatch(addPostToAPI(data));
  };

  return (
    <>
      <h2>New Post</h2>
      <PostForm doOnSubmit={ handleAddPost } redirect="/" />
    </>
  );
};

export default NewPostForm;