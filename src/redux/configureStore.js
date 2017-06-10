import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from './reducers/loginReducer';
import { authStateReducer } from 'redux-oauth';
import { createLogger } from 'redux-logger';

export default function (initialState = {}) {
    const rootReducer = combineReducers({
        auth: authStateReducer,
        login: loginReducer
    });

    const logger = createLogger();

    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, logger));
}
