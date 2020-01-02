import Axios from "axios";


import { GET_ORDER  } from "../config/constant";

export const getOrder = () => {
    return{
      type: GET_ORDER,
      payload: Axios({
        method: "GET",
        url: `https://dumb-tick-api.herokuapp.com/api/order`
      })
    }
}

