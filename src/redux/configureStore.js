import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from './reducers/loginReducer';

export default function (initialState = {}) {
    const rootReducer = combineReducers({
        login: loginReducer
    });

    return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
