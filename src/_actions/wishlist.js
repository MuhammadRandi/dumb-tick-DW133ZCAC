import Axios from "axios";


import { GET_WISHLIST  } from "../config/constant";

export const getWishlist = (id) => {
    return{
      type: GET_WISHLIST,
      payload: Axios({
        method: "GET",
        url: `https://dumb-tick-api.herokuapp.com/api/wishlist/${id}/user`
      })
    }
}

