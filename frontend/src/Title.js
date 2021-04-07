import React from "react";
import { useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown
} from "@fortawesome/free-solid-svg-icons";
import { upVoteInAPI, downVoteInAPI } from "./actions";
import "./Title.css";

/**
 * Component for displaying a card with a post's title and description, and a
 * link to the post view page for the post
 * @param {Object{string|Object{string}}} param0 
 * @returns JSX code for rendering post title and description card
 */
const Title = ({ id, title }) => {
  const dispatch = useDispatch();

  /**
   * Uses dispatch to up-vote a post
   */
  const handleUpVote = () => {
    dispatch(upVoteInAPI(id));
  };

  /**
   * Uses dispatch to down-vote a post
   */
  const handleDownVote = () => {
    dispatch(downVoteInAPI(id));
  };

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Text>
          <Link to={ `/${id}` }>{ title.title }</Link>
          <br />
          <i className="Title-description">{ title.description }</i>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        {
          title.votes === 1 ? `${title.votes} vote:` : `${title.votes} votes:`
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
      </Card.Footer>
    </Card>
  );
};

export default Title;