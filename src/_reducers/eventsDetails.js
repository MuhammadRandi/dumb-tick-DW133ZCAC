import { GET_ID_EVENT } from "../config/constant";

const initialStates = {
  data: [],
  isLoading: false,
  error: false
};

export const eventDetails = (state = initialStates, action) => {
  switch (action.type) {
    case `${GET_ID_EVENT}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_ID_EVENT}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false
      };
    case `${GET_ID_EVENT}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    default:
      return state;
  }
};
