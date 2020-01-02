import Axios from "axios";


import {  GET_EVENTS, GET_ID_EVENT } from "../config/constant";

export const getEvents = () => {
    return{
      type: GET_EVENTS,
      payload: Axios({
        method: "GET",
        url: "http://localhost:5000/api/events"
      })
    }
}

export const getIdEvent = (id) => {
    return {
      type: GET_ID_EVENT,
      payload: Axios({
        method: 'GET',
        url: `http://localhost:5000/api/event/${id}`
      })
    }
  }