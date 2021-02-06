import { FETCH_USER } from '../actions/types';

const initState = {
  user: null,
  credits: 0
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        user: action.payload
      }
    default:
      return state;
  }
}

export default authReducer;