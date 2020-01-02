import Axios from "axios";


import { GET_USERS  } from "../config/constant";

export const getUser = () => {
    return{
      type: GET_USERS,
      payload: Axios({
        method: "GET",
        url: `http://localhost:5000/api/user/${localStorage.getItem('id')}`
      })
    }
}