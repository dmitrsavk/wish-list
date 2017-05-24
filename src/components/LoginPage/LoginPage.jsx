import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import Checkbox from 'react-bootstrap/lib/Checkbox';

import './LoginPage.scss';

const formInstance = (
    <Form horizontal>
        <FormGroup controlId='formHorizontalEmail'>
            <Col componentClass={ControlLabel} sm={2}>
                Email
            </Col>
            <Col sm={10}>
                <FormControl type='email' placeholder='Email' />
            </Col>
        </FormGroup>

        <FormGroup controlId='formHorizontalPassword'>
            <Col componentClass={ControlLabel} sm={2}>
                Password
            </Col>
            <Col sm={10}>
                <FormControl type='password' placeholder='Password' />
            </Col>
        </FormGroup>

        <FormGroup>
            <Col smOffset={2} sm={10}>
                <Checkbox>Remember me</Checkbox>
            </Col>
        </FormGroup>

        <FormGroup>
            <Col smOffset={2} sm={10}>
                <Button type='submit'>
                Sign in
                </Button>
            </Col>
        </FormGroup>
    </Form>
);

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='login-page'>
                <div className='login-page__form'>
                    {formInstance}
                </div>
            </div>
        );
    }
}

export default LoginPage;
