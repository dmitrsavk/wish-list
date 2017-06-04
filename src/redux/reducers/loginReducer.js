import { FIND_USER } from 'redux/actions/loginActions';

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case FIND_USER:
            console.log('Ты добрался до редьюсера');
            console.log(action.login);
            console.log(action.password);
            return {};
        default:
            return state;
    }
}
