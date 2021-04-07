import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

/**
 * Component for displaying form to add or edit a post
 * @returns JSX code for rendering form
 */
const PostForm = ({
  initFormData={ title: "", description: "", body: "" },
  doOnSubmit,
  redirect
}) => {
  const history = useHistory();
  const [formData, setFormData] = useState(initFormData);

  const handleChange = evt => {
    const { id, value } = evt.target;
    setFormData(formData => ({ ...formData, [id]: value }));
  };

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