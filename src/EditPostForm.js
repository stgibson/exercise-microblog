import React from "react";
import PostForm from "./PostForm";

const EditPostForm = ({ id, post }) => {
  return (
    <>
      <h3>Edit Post</h3>
      <PostForm initFormData={ post } redirect={ `/${id}` } />
    </>
  );
};

export default EditPostForm;