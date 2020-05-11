import { SET_AUTH_USER } from "../actions/authUser";

export const authUserReducer = (state = null, action) => {
  if (action.type === SET_AUTH_USER) {
    return action.id;
  } else {
    return state;
  }
};

//export default authUserReducer;
