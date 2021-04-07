import React from "react";
import { useDispatch } from "react-redux";
import { editPost } from "./actions";
import PostForm from "./PostForm";

const EditPostForm = ({ id, post }) => {
  const dispatch = useDispatch();

  const handleEditPost = data => {
    dispatch(editPost(id, data));
  };

  return (
    <>
      <h3>Edit Post</h3>
      <PostForm
        initFormData={ post }
        doOnSubmit={ handleEditPost }
        redirect={ `/${id}` }
      />
    </>
  );
};

export default EditPostForm;