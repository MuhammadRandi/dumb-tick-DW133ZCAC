import { combineReducers, createStore, applyMiddleware } from "redux"
import {promise, logger} from "./middleware"


import { categories } from "../_reducers/categories"
import { categoryDetails} from "../_reducers/categoryDetails"
import { events} from "../_reducers/events"
import { eventDetails} from "../_reducers/eventsDetails"
import {users} from "../_reducers/users"
import {wishlist} from '../_reducers/wishlist'

const rootReducers = combineReducers({
    categories,
    events,
    eventDetails,
    categoryDetails,
    users,
    wishlist
})

const store = createStore(rootReducers, applyMiddleware(promise,logger))

export default store