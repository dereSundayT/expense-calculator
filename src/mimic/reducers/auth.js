import { REGISTER_SUCCESS, REGISTER_FAIL } from '.../../action/types.js';

initialState = {
  token: localStorage.getItem('token'),
  isAuthencated: false
};
export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      token: localStorage.setItem('token'), { ...state, ...payload, isAuthencated:true,loading:false};
  }
}
