import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk"
import {reducer as ProductReducer} from "./ProductReducer/reducer"
import {reducer as AdminProductReducer} from "./AdminProductReducer/reducer"
const RootReducer = combineReducers({
   ProductReducer : ProductReducer,
   AdminProductReducer : AdminProductReducer,
})


export const store = legacy_createStore(RootReducer,applyMiddleware(thunk))