import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const defaultInitFormData = {
  title: "",
  description: "",
  body: "",
  comments: {},
  votes: 0
}

/**
 * Component for displaying form to add or edit a post
 * @params {Object{Object{string|Object{string}|number}|function|string}}
 * param0
 * @returns JSX code for rendering form
 */
const PostForm = ({
  initFormData=defaultInitFormData,
  doOnSubmit,
  redirect
}) => {
  const history = useHistory();
  const [formData, setFormData] = useState(initFormData);

  /**
   * Updates formData when user types in input
   * @param {Object{any}} evt 
   */
  const handleChange = evt => {
    const { id, value } = evt.target;
    setFormData(formData => ({ ...formData, [id]: value }));
  };

  /**
   * Calls doOnSubmit and redirects when user submits form
   */
  const handleSubmit = () => {
    doOnSubmit(formData);
    history.push(redirect);
  };

  return (
    <>
      <Form>
        <Form.Group controlId="title">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            onChange={ handleChange }
            value={ formData.title }
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            type="text"
            onChange={ handleChange }
            value={ formData.description }
          />
        </Form.Group>
        <Form.Group controlId="body">
          <Form.Label>Body:</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            onChange={ handleChange }
            value={ formData.body }
          />
        </Form.Group>
      </Form>
      <Button className="mr-2 py-1" variant="primary" onClick={ handleSubmit }>
        Save
      </Button>
      <Link to={ redirect }>
        <Button className="py-1" variant="secondary">Cancel</Button>
      </Link>
    </>
  );
};

export default PostForm;