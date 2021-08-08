import React from "react";

import "./checkout-item.styles.scss";

const CheckoutItem = (props) => {
  console.log("checkout item props are:", props.item);
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={props.item.imageUrl} alt="item" />
      </div>
      <span className="name">{props.item.name}</span>
      <span className="quantity">{props.item.quantity}</span>
      <span className="price">{props.item.price}</span>
      <span className="remove-button">&#10005;</span>
    </div>
  );
};

export default CheckoutItem;
