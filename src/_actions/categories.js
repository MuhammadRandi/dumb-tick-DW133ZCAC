import Axios from "axios";

//
import { GET_CATEGORIES, GET_ID_CATEGORIES} from "../config/constant";

export const getCategories = () => {
  return {
    type: GET_CATEGORIES,
    payload: Axios({
      method: "GET",
      url: "http://localhost:5000/api/categories"
    })
  };
};

export const getIdCategories = (id) => {
  return {
    type: GET_ID_CATEGORIES,
    payload: Axios({
      method: 'GET',
      url: `http://localhost:5000/api/category/${id}`
    })
  }
}