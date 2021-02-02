import axios from 'axios';

import { FETCH_USER } from './types';

// export const fetchUser = () => {
//   return function (dispatch){
//     axios.get('/api/auth/current_user').then((res) => {
//       // console.log(res);
//       dispatch({ type: FETCH_USER, payload: res.data })
//     })
//   }
// }
export const fetchUser = () => async (dispatch) => {
    const response = await axios.get('/api/auth/current_user');
    if(response) dispatch({ type: FETCH_USER, payload: response.data })
  }
