import { INSTANCE } from '../constants/action-type';
import { showToast } from '../utils/config-toastr';

const initialState = {};

const newInstanceReducer = (state = initialState, action) => {
    switch (action.type) {
        case INSTANCE.FETCH_NEW_INSTANCE_SUCCESS:
            showToast('success', action.message);
            return { ...state, ...action.payload };
        case INSTANCE.FETCH_NEW_INSTANCE_FAILURE:
            showToast('warning', action.message);
            // console.log({ action })
            return { ...action };
        default: return { ...state };
    }
}

export default newInstanceReducer;