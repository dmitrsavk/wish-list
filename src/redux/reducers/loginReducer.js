import { FIND_USER, CREATE_USER } from 'redux/actions/loginActions';

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case FIND_USER:
            return state;
        case CREATE_USER:
            return state;
        default:
            return state;
    }
}
