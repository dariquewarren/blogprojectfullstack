import React from 'react'
import Form from 'react-bootstrap/Form'
function SignupForm() {
    return (
        <div>
    <Form>
    <Form.Group>
    <Form.Label>email</Form.Label>
    <Form.Control type='email' />
    </Form.Group>
    <Form.Group>
    <Form.Label>password</Form.Label>
    <Form.Control type='password' />
    </Form.Group>
    </Form>  
    <Form.Group>
    <Form.Label>first name</Form.Label>
    <Form.Control type='text' />
    </Form.Group>
    <Form.Group>
    <Form.Label>last name</Form.Label>
    <Form.Control type='text' />
    </Form.Group>
        </div>
    )
}

export default SignupForm
