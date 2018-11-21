import { LOGIN_AUTH_TYPES } from "../constants/action-type";
import { apiCall } from '../utils/api-call';

//login 
export const loginRequest = (username, password, history) => {
    return async dispatch => {
        try {
            const res = await apiCall('/user/login', 'POST', { username_mail: username, password })
            if (!res.data.error) {
                localStorage.setItem('token', res.data.data.token);
                localStorage.setItem('user', JSON.stringify(res.data.data.infoUser));
                // console.log(res.data.data.infoUser);
                dispatch(loginSuccess(res.data.data.infoUser));
                // dispatch(loginAuth(localStorage.getItem()))
            } else {
                console.log(res.data)
                dispatch(loginFailure())
            }
        } catch (err) {
            dispatch(loginFailure())
        }
    }
}

export const loginAuth = (token, user) => {
    return {
        type: LOGIN_AUTH_TYPES.LOGIN_SUCCESS,
        token: token,
        payload: user
    }
}

export const loginSuccess = user => {
    return {
        type: LOGIN_AUTH_TYPES.LOGIN_SUCCESS,
        payload: user
    }
}

export const loginFailure = () => {
    return {
        type: LOGIN_AUTH_TYPES.LOGIN_FAILURE,
        payload: 'Username or password wrong!'
    }
}

// export const loginFailure = () => {
//     return {
//         type: LOGIN_AUTH_TYPES.LOGIN_FAILURE,
//         payload: 'invalid username or password'
//     }
// }

// export const logoutReqeust = () => {
//     return dispatch => {

//     }
// }

// export const logout = () => {
//     return {
//         type: LOGIN_AUTH_TYPES.LOGOUT
//     }
// }

export const clearToken = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    return {
        type: LOGIN_AUTH_TYPES.LOGOUT
    }
}