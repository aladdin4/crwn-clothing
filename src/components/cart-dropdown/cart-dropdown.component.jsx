import React from "react";
import { connect } from "react-redux";
import { itemsListSelector } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/cart-item.component";

import CustomBtn from "../custom-btn/customBtn.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = (props) => {
  console.log(props.items);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {props.items.map((item) => {
          console.log(item.id);
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <CustomBtn>GO TO CHECKOUT </CustomBtn>
    </div>
  );
};

const mapState = (state) => {
  return { items: itemsListSelector(state) };
};

export default connect(mapState)(CartDropdown);
