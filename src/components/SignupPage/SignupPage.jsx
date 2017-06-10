import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createUser } from '../../redux/actions/loginActions';
import ReactDOM from 'react-dom';

import Header from '../Header';

import './SignupPage.scss';

class SignupPage extends React.Component {
    static get propTypes() {
        return {
            dispatch: PropTypes.func.isRequired
        };
    }

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.dispatch(createUser({
            login: ReactDOM.findDOMNode(this.login).value,
            password: ReactDOM.findDOMNode(this.password).value
        }));
    }

    render() {
        return (
            <div className='signup-page'>
                <div className='signup-page__header'>
                    <Header
                        buttonContent='Sign Up'
                        buttonHref='/login'
                    />
                </div>
                <div className='signup-page__form'>
                    <Form horizontal onSubmit={this.handleSubmit}>
                        <FormGroup controlId='formHorizontalEmail'>
                            <Col componentClass={ControlLabel} sm={2}>
                                Email
                            </Col>
                            <Col sm={10}>
                                <FormControl
                                    type='email'
                                    placeholder='Email'
                                    ref={(ref) => {this.login = ref;}}
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId='formHorizontalPassword'>
                            <Col componentClass={ControlLabel} sm={2}>
                                Password
                            </Col>
                            <Col sm={10}>
                                <FormControl
                                    type='password'
                                    placeholder='Password'
                                    ref={(ref) => {this.password = ref;}}
                                />
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
                </div>
            </div>
        );
    }
}

export default connect()(SignupPage);
