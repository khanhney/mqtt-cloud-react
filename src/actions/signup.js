import { SIGN_UP_AUTH_TYPES } from '../constants/action-type';
import { apiCall } from '../utils/api-call';


//sign up
export const signUpRequest = (user, history) => {
    return async dispatch => {
        try {
            const res = await apiCall('/user/register', 'POST', user)
            // console.log(res.data)

            if (!res.data.error) {
                dispatch(signUpSuccess(res.data));
                // history.location.state = { username: user.username };
                history.push('/login', { username: user.username });
            } else {
                dispatch(signUpFaild());
            }

        } catch (err) {
            dispatch(signUpFaild())
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

export const signUpFaild = () => {
    return {
        type: SIGN_UP_AUTH_TYPES.SIGN_UP_FAILURE,
        message: 'Tại khoản đã tồn tại!'
    }
}