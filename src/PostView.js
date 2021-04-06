import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import posts from "./fakeDb.json";
import CommentList from "./CommentList";

/**
 * Component for displaying post
 * @returns JSX code for rendering post
 */
const PostView = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    setPost(posts[postId]);
  }, [postId]);

  return (
    <>
      <h2>{ post.title }</h2>
      <p><i>{ post.description }</i></p>
      <p>{ post.body }</p>
      <CommentList comments={ post.comments } />
    </>
  );
};

export default PostView;