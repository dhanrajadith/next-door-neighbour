import React from 'react'
import '../App.css';
import { Button, Form } from 'react-bootstrap';

export default function Signup() {
    return (
        <div className='pare'>








            <Form >

                <div class="form-group">
                    <label for="formGroupExampleInput">First Name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="First Name"></input>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">Last Name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Last name"></input>
                </div>


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

                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>

                <br />
                <div class="form-group">
                    <div class="form-group">
                        <label for="exampleFormControlFile1">Choose Profile Picture</label>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1">
                        </input>
                    </div>
                </div>


                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <div className='container'>
                    <Button variant="primary" type="submit">
                        Submit
                </Button>

                    <p>Already have an account!</p>
                    <Button variant="primary" type="submit" href="signin">
                        Sign in
                </Button>
                </div>

            </Form>
        </div >
    )
}
