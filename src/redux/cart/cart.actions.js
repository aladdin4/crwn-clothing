import React from "react";

export const cartToggler = () => {
  return {
    type: "TOGGLE_CART_HIDDEN",
  };
};

export const addItem = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: "REMOVE_ITEM",
    payload: item,
  };
};

export const decreaseItem = (item) => {
  return {
    type: "DECREASE_ITEM",
    payload: item,
  };
};
