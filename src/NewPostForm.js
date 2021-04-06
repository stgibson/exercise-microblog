import React from "react";
import PostForm from "./PostForm";

/**
 * Component for displaying form to create a new post
 * @returns JSX code for rendering page to add a new post
 */
const NewPostForm = () => {
  return (
    <>
      <h2>New Post</h2>
      <PostForm redirect="/" />
    </>
  );
};

export default NewPostForm;