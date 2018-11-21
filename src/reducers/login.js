import { LOGIN_AUTH_TYPES } from '../constants/action-type';

const initialState = {};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_AUTH_TYPES.LOGIN_SUCCESS:
            return { ...state, authenticated: true, ...action };
        case LOGIN_AUTH_TYPES.LOGIN_FAILURE:
            return { ...state, message: action.payload };
        case LOGIN_AUTH_TYPES.LOGOUT:
            return { ...state, authenticated: false, user: null };
        default: return { ...state };
    }
}

export default authReducer;