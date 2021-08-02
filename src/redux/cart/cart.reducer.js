import React from "react";
import { addItemToCart } from "./cart.utils";

const INIT_STATE = {
  hidden: true,
  addedItems: [],
};

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_CART_HIDDEN":
      // reversing the hidden state each time we click on the button
      return { ...state, hidden: !state.hidden };

    case "ADD_ITEM":
      return {
        ...state,
        addedItems: addItemToCart(state.addedItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
