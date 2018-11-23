import { SIGN_UP_AUTH_TYPES } from '../constants/action-type';
import { apiCall } from '../utils/api-call';


//sign up
export const signUpRequest = (user, history) => {
    return async dispatch => {
        try {
            const res = await apiCall('/user/register', 'POST', user)
            if (!res.data.error) {
                console.log(res.data)
                dispatch(signUpSuccess(res.data));
                history.push('/login');
            } else {
                console.log(res.data)
                dispatch(signUpFaild(res.data.error));
            }

        } catch (err) {
            dispatch(signUpFaild({ error: 'Sign Up Faild!' }))
        }
    }
}

export const signUpSuccess = user => {
    return {
        type: SIGN_UP_AUTH_TYPES.SIGN_UP_SUCCESS,
        payload: user,
        message: 'Bạn đã đăng kí thành công!'
    }
}

export const signUpFaild = error => {
    return {
        type: SIGN_UP_AUTH_TYPES.SIGN_UP_FAILURE,
        message: 'Tại khoản đã tồn tại!'
    }
}