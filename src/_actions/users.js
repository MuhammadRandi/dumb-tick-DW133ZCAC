import Axios from "axios";


import { GET_USERS  } from "../config/constant";

export const getUser = () => {
    return{
      type: GET_USERS,
      payload: Axios({
        method: "GET",
        url: `https://dumb-tick-api.herokuapp.com/api/user/${localStorage.getItem('id')}`
      })
    }
}

