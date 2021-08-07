import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { cartToggler } from "../../redux/cart/cart.actions";
import { quantitySelector } from "../../redux/cart/cart.selectors";
import "./cart-icon.styles.scss";

const CartIcon = (props) => {
  // console.log("here are my probs", props);
  return (
    <div
      className="cart-icon"
      onClick={() => {
        props.toggleHidden();
      }}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{props.quantity}</span>
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
const mapState = (state) => {
  return {
    quantity: quantitySelector(state),
  };
};
export default connect(mapState, mapDispatch)(CartIcon);
