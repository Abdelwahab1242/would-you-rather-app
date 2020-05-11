import { combineReducers } from "redux";
import { authUserReducer } from "./authUser";
import { questionsReducer } from "./questions";
import { usersReducer } from "./users";

export default combineReducers({
  authUserReducer,
  questionsReducer,
  usersReducer,
});
