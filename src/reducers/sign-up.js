import { SIGN_UP_AUTH_TYPES } from '../constants/action-type';

const initialState = {};

const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_AUTH_TYPES.SIGN_UP_SUCCESS:
            return { ...state, user: action.payload };
        case SIGN_UP_AUTH_TYPES.SIGN_UP_FAILURE:
            return { ...state, user: action.error };
        default: return { ...state };
    }
}

export default signUpReducer;