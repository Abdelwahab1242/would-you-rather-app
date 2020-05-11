import { RECEIVE_QUESTIONS } from "../actions/questions";

export const questionsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return { ...state, ...action.questions };

    default:
      return state;
  }
};
