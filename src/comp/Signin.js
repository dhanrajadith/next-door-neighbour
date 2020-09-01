import React from 'react'
import '../App.css';
import { Button, Form } from 'react-bootstrap';

export default function Signin() {
    return (
        <div className='par'>
            <Form >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <div className='container'>
                    <Button variant="primary" type="submit">
                        Submit
                </Button>

                    <p>Do not have an account?</p>
                    <Button variant="primary" type="submit" href="signup">
                        Sign Up
                </Button>
                </div>
            </Form>
        </div>
    )
}
