import { GET_EVENTS, GET_ID_EVENT } from "../config/constant";

const initialStates = {
  data: [],
  isLoading: false,
  error: false
};

export const events = (state = initialStates, action) => {
  switch (action.type) {
    case `${GET_EVENTS}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_EVENTS}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    case `${GET_EVENTS}_FULFILLED`:
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
