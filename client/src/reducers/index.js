import { combineReducers } from 'redux';

// import the reducer
import authReducer from './auth.reducer';

export default combineReducers({
  auth: authReducer
});