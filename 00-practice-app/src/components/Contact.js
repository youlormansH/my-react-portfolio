import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => {
  return (
    <Form className="contact-forms">
      <Form.Group className="mb-3" controlId="for-name">
        <Form.Label>name</Form.Label>
        <Form.Control type="input" placeholder="youlo" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="message">
        <Form.Label>Write message</Form.Label>
        <Form.Control as="textarea" rows={5} />
        
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Contact