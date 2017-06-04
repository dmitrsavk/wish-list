import React from 'react';
import { Route, Redirect } from 'react-router';
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import App from './components/App';

const isLogged = false;

const mainRender = () => {
    return isLogged ?
        <MainPage /> : <Redirect to='/login'/>;
};

const loginRender = () => {
    return <LoginPage/>;
};

export default (
    <App>
        <Route exact path= '/' render={mainRender} />
        <Route path='/login' render={loginRender} />
        <Route path='/signup' component={SignupPage} />
    </App>
);
