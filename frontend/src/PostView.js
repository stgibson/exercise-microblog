import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faEdit,
  faThumbsUp,
  faThumbsDown
} from "@fortawesome/free-solid-svg-icons";
import {
  getPostFromAPI,
  deletePostInAPI,
  upVoteInAPI,
  downVoteInAPI
} from "./actions";
import CommentList from "./CommentList";
import EditPostForm from "./EditPostForm.js";

/**
 * Component for displaying post
 * @returns JSX code for rendering post
 */
const PostView = () => {
  const history = useHistory();
  const { postId } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector(store => store.posts, shallowEqual);
  const [post, setPost] = useState({});
  const [showForm, setShowForm] = useState(false);

  /**
   * Uses dispatch to delete a post, and redirects to homepage
   */
  const handleDeletePost = () => {
    dispatch(deletePostInAPI(postId));
    history.push("/");
  };

  /**
   * Uses dispatch to up-vote a post
   */
  const handleUpVote = () => {
    dispatch(upVoteInAPI(postId));
  };

  /**
   * Uses dispatch to down-vote a post
   */
  const handleDownVote = () => {
    dispatch(downVoteInAPI(postId));
  };

  /**
   * Shows edit post form
   */
  const showEditPostForm = () => {
    setShowForm(true);
  }

  // when post is edited, should hide edit post form
  useEffect(() => {
    setShowForm(false);
  }, [post]);

  // set post based on URL param
  useEffect(() => {
    if (posts[postId]) {
      setPost(posts[postId]);
    }
    // if post isn't in store, load from API
    else {
      dispatch(getPostFromAPI(postId));
    }
  }, [postId, posts, history, dispatch]);

  if (Object.keys(post).length) {
    return (
      <>
        <h2>{ post.title }</h2>
        <Row>
          <Col xs={ 10 }>
            <p><i>{ post.description }</i></p>
          </Col>
          <Col xs={ 2 }>
            <FontAwesomeIcon
              icon={ faEdit }
              color="#017cff"
              onClick={ showEditPostForm }
            />
            <FontAwesomeIcon
              icon={ faTimes }
              color="red"
              onClick={ handleDeletePost }
            />
            <div>
              {
                post.votes === 1 ? `${post.votes} vote:` :
                  `${post.votes} votes:`
              }
              <span>
                <FontAwesomeIcon
                  className="ml-2"
                  icon={ faThumbsUp }
                  color="green"
                  onClick={ handleUpVote }
                />
                <FontAwesomeIcon
                  className="ml-1"
                  icon={ faThumbsDown }
                  color="red"
                  onClick={ handleDownVote }
                />
              </span>
            </div>
          </Col>
        </Row>
        <p>{ post.body }</p>
        <CommentList postId={ postId } />
        { showForm && <EditPostForm id={ postId } post={ post } /> }
      </>
    );
  }

  return <div>Loading...</div>;
};

export default PostView;