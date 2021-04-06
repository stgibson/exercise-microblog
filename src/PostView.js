import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faEdit } from "@fortawesome/free-solid-svg-icons";
import posts from "./fakeDb.json";
import CommentList from "./CommentList";
import EditPostForm from "./EditPostForm.js";

/**
 * Component for displaying post
 * @returns JSX code for rendering post
 */
const PostView = () => {
  const history = useHistory();
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [showForm, setShowForm] = useState(false);

  const deletePost = () => {
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
    setPost(posts[postId]);
  }, [postId]);

  if (post) {
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
              onClick={ deletePost }
            />
          </Col>
        </Row>
        <p>{ post.body }</p>
        <CommentList comments={ post.comments } />
        { showForm && <EditPostForm id={ postId } post={ post } /> }
      </>
    );
  }

  return <div>Loading...</div>;
};

export default PostView;