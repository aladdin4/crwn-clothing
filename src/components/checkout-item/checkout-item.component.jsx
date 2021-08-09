import React from "react";
import { connect } from "react-redux";

import {
  addItem,
  decreaseItem,
  removeItem,
} from "../../redux/cart/cart.actions";
import "./checkout-item.styles.scss";

const CheckoutItem = (props) => {
  console.log("checkout item props are:", props);
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={props.item.imageUrl} alt="item" />
      </div>
      <span className="name">{props.item.name}</span>

      <span className="quantity">
        <div
          className="arrow"
          onClick={() => {
            props.decreaseItem(props.item);
          }}
        >
          {" "}
          &#10094;{" "}
        </div>

        <span className="value">{props.item.quantity}</span>

        <div
          className="arrow"
          onClick={() => {
            props.addItem(props.item);
          }}
        >
          &#10095;
        </div>
      </span>

      <span className="price">{props.item.price}</span>
      <span
        className="remove-button"
        onClick={() => {
          props.removeItem(props.item);
        }}
      >
        &#10005;
      </span>
    </div>
  );
};

const mapDispatch = (dispatch) => {
  return {
    removeItem: (item) => {
      dispatch(removeItem(item));
    },

    addItem: (item) => {
      dispatch(addItem(item));
    },

    decreaseItem: (item) => {
      dispatch(decreaseItem(item));
    },
  };
};
export default connect(null, mapDispatch)(CheckoutItem);
