import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as ProductReducer } from "./ProductReducer/reducer";
import { reducer as signUpReducer } from "./SignUpReducer/reducer";
import { reducer as loginReducer } from "./LoginReducer/reducer";
const RootReducer = combineReducers({
  ProductReducer: ProductReducer,
  signUpReducer: signUpReducer,
  loginReducer: loginReducer,
});

export const store = legacy_createStore(RootReducer, applyMiddleware(thunk));
