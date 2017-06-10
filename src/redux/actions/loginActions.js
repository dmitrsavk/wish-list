export const FIND_USER = 'FIND_USER';
export const CREATE_USER = 'CRATE_USER';
export const CREATE_USER_SUCCESS = 'CRATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'CRATE_USER_ERROR';

const authApi = 'api/user/create';

export function findUser(form) {
    return {
        type: FIND_USER,
        login: form.login,
        password: form.password
    };
}

export function createUser(form) {
    return dispatch => {
        dispatch({
            type: CREATE_USER,
            login: form.login,
            password: form.password
        });

        const data = JSON.stringify(form);

        fetch(authApi, {
            method: 'post',
            body: data,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res.body);
            dispatch({
                type: CREATE_USER_SUCCESS,
                login: res.body.login,
                password: res.body.password
            });
        });
    };
}
