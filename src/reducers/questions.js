import {
  RECEIVE_QUESTIONS,
  ADD_ANSWER_TO_QUESTION,
  ADD_QUESTION,
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

    case ADD_QUESTION:
      const { question } = action;

      return {
        ...state,
        [question.id]: question,
      };

    default:
      return state;
  }
};

export default questions;
