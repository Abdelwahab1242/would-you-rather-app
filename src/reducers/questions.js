import {
  RECEIVE_QUESTIONS,
  ADD_ANSWER_TO_QUESTION,
} from "../actions/questions";

const questions = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return { ...state, ...action.questions };

    case ADD_ANSWER_TO_QUESTION:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat(
              action.authUser
            ),
          },
        },
      };

    default:
      return state;
  }
};

export default questions;
