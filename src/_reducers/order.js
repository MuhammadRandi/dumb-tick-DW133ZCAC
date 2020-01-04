import { GET_ORDER } from "../config/constant";

const initialStates = {
  data: [],
  isLoading: false,
  error: false
};

export const orders = (state = initialStates, action) => {
  switch (action.type) {
    case `${GET_ORDER}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_ORDER}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    case `${GET_ORDER}_FULFILLED`:
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
