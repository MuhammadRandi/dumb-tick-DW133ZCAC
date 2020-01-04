import Axios from "axios";


import { GET_ORDER  } from "../config/constant";

export const getOrder = (id) => {
    return{
      type: GET_ORDER,
      payload: Axios({
        method: "GET",
        url: `http://dumb-tick-api.herokuapp.com/api/order/${id}/user`
      })
    }
}

