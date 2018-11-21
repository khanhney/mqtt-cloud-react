import { INSTANCE } from '../constants/action-type';

const initialState = [];

const instancesReducer = (state = initialState, action) => {
    switch (action.type) {
        case INSTANCE.FETCH_INSTANCE_SUCCESS:
            state = [...action.payload];
            return [...state];
        case INSTANCE.FETCH_INSTANCE_FAILURE:
            return { ...action };
        default: return [...state];
    }
}

export default instancesReducer;