import React from "react";
import SHOP_DATA from "./shop.data";

const INIT_VALUE = SHOP_DATA;

const shopReducer = (state = INIT_VALUE, action) => {
  switch (action) {
    default:
      return state;
  }
};

export default shopReducer;
