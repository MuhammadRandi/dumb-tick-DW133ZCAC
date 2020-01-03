import { GET_WISHLIST} from "../config/constant";

const initialStates = {
  data: [],
  isLoading: false,
  error: false
};

export const wishlist = (state = initialStates, action) => {
  switch (action.type) {
    case `${GET_WISHLIST}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_WISHLIST}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    case `${GET_WISHLIST}_FULFILLED`:
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
