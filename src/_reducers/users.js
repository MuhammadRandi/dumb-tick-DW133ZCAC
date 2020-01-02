import { GET_USERS } from "../config/constant";

const initialStates = {
  data: [],
  isLoading: false,
  error: false
};

export const users = (state = initialStates, action) => {
  switch (action.type) {
    case `${GET_USERS}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_USERS}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    case `${GET_USERS}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false
      };

    //
    default:
      return state;
  }
};
