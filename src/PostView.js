import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faEdit } from "@fortawesome/free-solid-svg-icons";
import { deletePost } from "./actions";
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
  const posts = useSelector(store => store.posts);
  const [post, setPost] = useState({});
  const [showForm, setShowForm] = useState(false);

  const handleDeletePost = () => {
    dispatch(deletePost(postId));
    history.push("/");
  };

  const showEditPostForm = () => {
    setShowForm(true);
  }

  useEffect(() => {
    setShowForm(false);
  }, [post]);

  // set post based on URL param
  useEffect(() => {
    if (posts[postId]) {
      setPost(posts[postId]);
    }
    else {
      history.push("/");
    }
  }, [postId, posts, history]);

  if (Object.keys(post).length) {
    return (
      <>
        <h2>{ post.title }</h2>
        <Row>
          <Col xs={ 11 }>
            <p><i>{ post.description }</i></p>
          </Col>
          <Col xs={ 1 }>
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