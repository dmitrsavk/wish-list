import React from 'react';
import { Route, Redirect } from 'react-router';
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import App from './components/App';

const isLogged = false;

const mainRender = () => {
	if (isLogged) {
		return <MainPage />;
	} else {
		return <Redirect to='/login'/>;
	}
}

export default (
    <App>
        <Route exact path= '/' render={mainRender} />
        <Route path='/login' component={LoginPage} />
        <Route path='/signup' component={SignupPage} />
    </App>
);
