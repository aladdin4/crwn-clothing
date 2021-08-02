// combine reducers create the state internally
// it takes a root state as property key and the value would be the reducer responsible for handling it.

import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";

import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  cartState: cartReducer,
});
