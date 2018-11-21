import { INSTANCE } from '../constants/action-type';

const initialState = {};

const newInstanceReducer = (state = initialState, action) => {
    switch (action.type) {
        case INSTANCE.FETCH_NEW_INSTANCE_SUCCESS:
            return {...state, ...action.payload};
        case INSTANCE.FETCH_INSTANCE_FAILURE:
            return {...action};
        default: return {...state};
    }
}

export default newInstanceReducer;