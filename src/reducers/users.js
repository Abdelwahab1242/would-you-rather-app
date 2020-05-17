import { RECEIVE_USERS, ADD_ANSWER_TO_USER } from "../actions/users";

const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...state, ...action.users };
    // case ADD_VOTE_TO_USER:
    //   return {
    //     ...state,
    //     [action.authUser]: {
    //       ...state[action.authUser],
    //       answers: {
    //         ...state[action.authUser].answers,
    //         [action.questionID]: action.vote,
    //       },
    //     },
    //   };

    case ADD_ANSWER_TO_USER:
      const { authUser, qid, answer } = action;

      return {
        ...state,
        [authUser]: {
          ...state[authUser],
          answers: {
            ...state[authUser].answers,
            [qid]: answer,
          },
        },
      };

    default:
      return state;
  }
};

export default users;
