import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from "../actionTypes";

import data from "../fakeDb.json";

/**
 * Manages state based on action
 * @param {Object{Object{string|Object{string}}}} state 
 * @param {Object{string|Object{string|Object{string}}}} action 
 * @returns new state
 */
const rootReducer = (state=data, action) => {
  switch(action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: { ...state.posts, [action.id]: action.post },
        titles: { ...state.titles, [action.id]: action.title }
      };
    case EDIT_POST:
      return {
        ...state,
        posts: { ...state.posts, [action.id]: action.post },
        titles: { ...state.titles, [action.id]: action.title }
      }
    case DELETE_POST:
      const posts = state.posts;
      const postsLeftover = Object.keys(posts)
        .reduce((postsLeftover, nextPostId) => {
          if (nextPostId !== action.id) {
            postsLeftover[nextPostId] = posts[nextPostId]; 
          }
          return postsLeftover;
        }, {});
      const titles = state.titles;
      const titlesLeftover = Object.keys(titles)
        .reduce((titlesLeftover, nextTitleId) => {
          if (nextTitleId !== action.id) {
            titlesLeftover[nextTitleId] = titles[nextTitleId];
          }
          return titlesLeftover;
        }, {});
      return { ...state, posts: postsLeftover, titles: titlesLeftover };
    case ADD_COMMENT:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.postId]: {
            ...state.posts[action.postId],
            comments: {
              ...state.posts[action.postId].comments,
              [action.commentId]: action.comment
            }
          }
        }
      };
    case DELETE_COMMENT:
      const comments = state.posts[action.postId].comments
      const commentsLeftover = Object.keys(comments)
        .reduce((commentsLeft, nextCommentId) => {
          if (nextCommentId !== action.commentId) {
            commentsLeft[nextCommentId] = comments[nextCommentId];
          }
          return commentsLeft;
        }, {});
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.postId]: {
            ...state.posts[action.postId],
            comments: commentsLeftover
          }
        }
      };
    default:
      return state;
  }
};

export default rootReducer;