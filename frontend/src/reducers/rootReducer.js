import {
  SHOW_ERR,
  LOAD_TITLES,
  LOAD_POST,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  UP_VOTE,
  DOWN_VOTE
} from "../actionTypes";

/**
 * Manages state based on action
 * @param {Object{Object{string|Object{string}|numbe}}} state 
 * @param {Object{string|Object{string|Object{string}|number}}} action 
 * @returns new state
 */
const rootReducer = (state={ titles: {}, posts: {}, err: "" }, action) => {
  switch(action.type) {
    case SHOW_ERR:
      return { ...state, err: action.msg };
    case LOAD_TITLES:
      return { ...state, titles: action.titles };
    case LOAD_POST:
      return { ...state, posts: { ...state.posts, [action.id]: action.post } };
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
    case UP_VOTE:
      if (state.posts[action.id]) {
        const newVote = state.posts[action.id].votes + 1;
        return {
          ...state,
          titles: {
            ...state.titles,
            [action.id]: { ...state.titles[action.id], votes: newVote }
          },
          posts: {
            ...state.posts,
            [action.id]: { ...state.posts[action.id], votes: newVote }
          }
        };
      }
      else {
        const newVote = state.titles[action.id].votes + 1;
        return {
          ...state,
          titles: {
            ...state.titles,
            [action.id]: { ...state.titles[action.id], votes: newVote }
          }
        };
      }
    case DOWN_VOTE:
      if (state.posts[action.id]) {
        const newVote = state.posts[action.id].votes - 1;
        return {
          ...state,
          titles: {
            ...state.titles,
            [action.id]: { ...state.titles[action.id], votes: newVote }
          },
          posts: {
            ...state.posts,
            [action.id]: { ...state.posts[action.id], votes: newVote }
          }
        };
      }
      else {
        const newVote = state.titles[action.id].votes - 1;
        return {
          ...state,
          titles: {
            ...state.titles,
            [action.id]: { ...state.titles[action.id], votes: newVote }
          }
        };
      }
    default:
      return state;
  }
};

export default rootReducer;