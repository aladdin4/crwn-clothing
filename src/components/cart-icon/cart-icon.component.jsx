import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { cartToggler } from "../../redux/cart/cart.actions";
import "./cart-icon.styles.scss";

const CartIcon = (props) => {
  return (
    <div
      className="cart-icon"
      onClick={() => {
        props.toggleHidden();
      }}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatch = (dispatch) => {
  return {
    toggleHidden: () => {
      dispatch(cartToggler());
    },
  };
};

export default connect(null, mapDispatch)(CartIcon);
