import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from "./actionTypes";

/**
 * Gets action to add post
 * @param {string} id 
 * @param {Object{string|Object{string}}} post 
 * @returns action
 */
const addPost = (id, post) => {
  return {
    type: ADD_POST,
    id,
    title: { title: post.title, description: post.description },
    post: {
      title: post.title,
      description: post.description,
      body: post.body,
      comments: {}
    }
  };
};

/**
 * Gets action to edit post
 * @param {string} id 
 * @param {Object{string|Object{string}}} post 
 * @returns action
 */
const editPost = (id, post) => {
  return {
    type: EDIT_POST,
    id,
    title: { title: post.title, description: post.description },
    post
  };
};

/**
 * Gets action to delete post
 * @param {string} id 
 * @returns action
 */
const deletePost = (id) => {
  return { type: DELETE_POST, id };
};

/**
 * Gets action to add comment
 * @param {string} postId 
 * @param {string} commentId 
 * @param {string} comment 
 * @returns action
 */
const addComment = (postId, commentId, comment) => {
  return { type: ADD_COMMENT, postId, commentId, comment };
};

/**
 * Gets action to delete comment
 * @param {string} postId 
 * @param {string} commentId 
 * @returns action
 */
const deleteComment = (postId, commentId) => {
  return { type: DELETE_COMMENT, postId, commentId };
};

export { addPost, editPost, deletePost, addComment, deleteComment };