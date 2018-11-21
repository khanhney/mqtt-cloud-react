import { INSTANCE } from '../constants/action-type';

const initialState = [];

const instanceReducer = (state = initialState, action) => {
    switch (action.type) {
        case INSTANCE.DETAIL_INSTANCE:
            return { ...action.payload };
        case INSTANCE.CHANGE_STATUS:
            return { ...state, ...action.payload };
        case INSTANCE.CHANGE_USER:
            return { ...state, ...action.payload };
        case INSTANCE.CHANGE_PASSWORD:
            return { ...state, ...action.payload };
        default: return { ...state };
    }
}

export default instanceReducer;