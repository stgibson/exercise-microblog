import axios from "axios";
import {
  SHOW_ERR,
  LOAD_TITLES,
  LOAD_POST,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from "./actionTypes";

const BASE_URL = "http://localhost:5000/api/posts";

const showErr = (msg) => {
  return { type: SHOW_ERR, msg };
};

const getTitles = (titles) => {
  return { type: LOAD_TITLES, titles };
};

const getTitlesFromAPI = () => {
  return async dispatch => {
    try {
      const res = await axios.get(`${BASE_URL}/`);
      const titles = res.data.reduce((titles, nextTitle) => {
        titles[nextTitle.id] = {
          title: nextTitle.title,
          description: nextTitle.description
        };
        return titles;
      }, {});
      dispatch(getTitles(titles));
    }
    catch(err) {
      dispatch(showErr(err.message));
    }
  };
};

const getPost = (id, post) => {
  return { type: LOAD_POST, id, post };
};

const getPostFromAPI = (id) => {
  return async dispatch => {
    try {
      const res = await axios.get(`${BASE_URL}/${id}`);
      const { title, description, body } = res.data;
      const comments = res.data.comments.reduce((comments, nextComment) => {
        comments[nextComment.id] = nextComment.text;
        return comments;
      }, {});
      dispatch(getPost(res.data.id, { title, description, body, comments }));
    }
    catch(err) {
      dispatch(showErr(err.message));
    }
  };
};

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
    post
  };
};

const addPostToAPI = (post) => {
  return async dispatch => {
    try {
      const res = await axios.post(`${BASE_URL}/`, post);
      dispatch(addPost(res.data.id, post));
    }
    catch(err) {
      dispatch(showErr(err.message));
    }
  };
}

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

const editPostInAPI = (id, post) => {
  return async dispatch => {
    try {
      await axios.put(`${BASE_URL}/${id}`, post);
      dispatch(editPost(id, post));
    }
    catch(err) {
      dispatch(showErr(err.message));
    }
  };
}

/**
 * Gets action to delete post
 * @param {string} id 
 * @returns action
 */
const deletePost = (id) => {
  return { type: DELETE_POST, id };
};

const deletePostInAPI = (id) => {
  return async dispatch => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      dispatch(deletePost(id));
    }
    catch(err) {
      dispatch(showErr(err.message));
    }
  };
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

const addCommentToAPI = (postId, comment) => {
  return async dispatch => {
    try {
      const res = await
        axios.post(`${BASE_URL}/${postId}/comments/`, { text: comment });
      dispatch(addComment(postId, res.data.id, comment));
    }
    catch(err) {
      dispatch(showErr(err.message));
    }
  };
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

const deleteCommentInAPI = (postId, commentId) => {
  return async dispatch => {
    try {
      await axios.delete(`${BASE_URL}/${postId}/comments/${commentId}`);
      dispatch(deleteComment(postId, commentId));
    }
    catch(err) {
      dispatch(showErr(err.message));
    }
  };
};

export {
  getTitlesFromAPI,
  getPostFromAPI,
  addPostToAPI,
  editPostInAPI,
  deletePostInAPI,
  addCommentToAPI,
  deleteCommentInAPI
};