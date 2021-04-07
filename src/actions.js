import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from "./actionTypes";

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

const editPost = (id, post) => {
  return {
    type: EDIT_POST,
    id,
    title: { title: post.title, description: post.description },
    post
  };
};

const deletePost = (id) => {
  return { type: DELETE_POST, id };
};

const addComment = (postId, commentId, comment) => {
  return { type: ADD_COMMENT, postId, commentId, comment };
};

const deleteComment = (postId, commentId) => {
  return { type: DELETE_COMMENT, postId, commentId };
};

export { addPost, editPost, deletePost, addComment, deleteComment };