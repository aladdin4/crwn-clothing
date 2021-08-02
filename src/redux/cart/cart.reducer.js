import React from "react";

const INIT_STATE = {
  hidden: true,
};

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_CART_HIDDEN":
      // reversing the hidden state each time we click on the button
      return { ...state, hidden: !state.hidden };

    default:
      return state;
  }
};

export default cartReducer;
