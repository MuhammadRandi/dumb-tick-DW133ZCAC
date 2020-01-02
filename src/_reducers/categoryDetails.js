import {
    GET_ID_CATEGORIES
  } from "../config/constant";
  
  const initialStates = {
    data: [],
    isLoading: false,
    error: false
  };
  
  export const categoryDetails = (state = initialStates, action) => {
    switch (action.type) {
      case `${GET_ID_CATEGORIES}_PENDING`:
        return {
          ...state,
          isLoading: true
        };
      case `${GET_ID_CATEGORIES}_FULFILLED`:
        return {
          ...state,
          data: action.payload.data,
          isLoading: false
        };
      case `${GET_ID_CATEGORIES}_REJECTED`:
        return {
          ...state,
          error: true,
          isLoading: false
        };
      default:
        return state;
    }
  };
  