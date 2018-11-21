import { combineReducers } from 'redux';
import auth from './login';
import signUpReducer from './sign-up';
import instancesReducer from './instances';
import newInstanceReducer from './newInstance';
import instanceReducer from './instance';

const rootReducer = combineReducers({
    auth,
    signUp: signUpReducer,
    instances: instancesReducer,
    instance: instanceReducer,
    newInstance: newInstanceReducer
})

export default rootReducer;