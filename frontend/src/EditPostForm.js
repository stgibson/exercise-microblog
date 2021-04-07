import React from "react";
import { useDispatch } from "react-redux";
import { editPostInAPI } from "./actions";
import PostForm from "./PostForm";

/**
 * Component for displaying form to edit a post
 * @param {Object{string|Object{string|Object{string}}}} param0 
 * @returns JSX code for rendering edit post form
 */
const EditPostForm = ({ id, post }) => {
  const dispatch = useDispatch();

  /**
   * Uses dispatch to edit a post
   * @param {Object{string|Object{string}}} data 
   */
  const handleEditPost = data => {
    dispatch(editPostInAPI(id, data));
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