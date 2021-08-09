import React from "react";
import { connect } from "react-redux";

import "./checkout.styles.scss";
import {
  addedItemsSelector,
  totalSelector,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = (props) => {
  console.log("props  of the checkout page are:", props);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Production</span>
        </div>

        <div className="header-block">
          <span>Description</span>
        </div>

        <div className="header-block">
          <span>Quantity</span>
        </div>

        <div className="header-block">
          <span>Price</span>
        </div>

        <div className="header-block">
          <span>remove</span>
        </div>
      </div>

      {props.addedItems.map((item) => {
        return <CheckoutItem key={item.id} item={item} />;
      })}

      <div className="total">Total: ${props.totalPrice}</div>
    </div>
  );
};

const mapstate = (state) => {
  return {
    addedItems: addedItemsSelector(state),
    totalPrice: totalSelector(state),
  };
};

export default connect(mapstate)(CheckoutPage);
