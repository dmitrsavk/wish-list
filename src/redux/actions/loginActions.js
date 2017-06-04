export const FIND_USER = 'FIND_USER';

export function findUser(form) {
    return {
        type: FIND_USER,
        login: form.login,
        password: form.password
    };
}
