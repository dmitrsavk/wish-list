import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';

import Header from '../Header';

import './SignupPage.scss';

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

        <FormGroup controlId='formHorizontalPasswordDouble'>
            <Col componentClass={ControlLabel} sm={2}>
                Password Double
            </Col>
            <Col sm={10}>
                <FormControl type='password' placeholder='Password Double' />
            </Col>
        </FormGroup>

        <FormGroup>
            <Col smOffset={2} sm={10}>
                <Button type='submit'>
                Sign up
                </Button>
            </Col>
        </FormGroup>
    </Form>
);

class SignupPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='signup-page'>
                <div className='signup-page__header'>
                    <Header
                        buttonContent='Sign In'
                        buttonHref='/login'
                    />
                </div>
                <div className='signup-page__form'>
                    {formInstance}
                </div>
            </div>
        );
    }
}

export default SignupPage;
