// combine reducers create the state internally
// it takes a root state as property key and the value would be the reducer responsible for handling it.
import { combineReducers } from "redux";

import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart.reducer";
import { userReducer } from "./user/user.reducer";

// config. obj. for our persist-reducer
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // only cart will be persisted
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

// export default rootReducer;

export const persistedReducer = persistReducer(persistConfig, rootReducer);
