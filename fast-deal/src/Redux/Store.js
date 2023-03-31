import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { reducer as ProductReducer } from "./ProductReducer/reducer";
import { reducer as signUpReducer } from "./SignUpReducer/reducer";
import { reducer as loginReducer } from "./LoginReducer/reducer";
import { reducer as cartReducer } from "./CartReducer/reducer";
import { reducer as AdminProductReducer } from "./AdminProductReducer/reducer";
const RootReducer = combineReducers({
  ProductReducer: ProductReducer,
  signUpReducer: signUpReducer,
  loginReducer: loginReducer,
  AdminProductReducer: AdminProductReducer,
  cartReducer: cartReducer,
});

export const store = legacy_createStore(RootReducer, applyMiddleware(thunk));
