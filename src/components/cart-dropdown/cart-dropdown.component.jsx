import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { itemsListSelector } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/cart-item.component";
import CustomBtn from "../custom-btn/customBtn.component";
import "./cart-dropdown.styles.scss";
import { cartToggler } from "../../redux/cart/cart.actions";

const CartDropdown = (props) => {
  // console.log(props);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {props.items.length ? (
          props.items.map((item) => {
            // console.log(item.id);
            return <CartItem key={item.id} item={item} />;
          })
        ) : (
          <span className="empty-message">your cart is empty</span>
        )}
      </div>
      <CustomBtn
        onClick={() => {
          props.history.push("/checkout");
          props.toggleHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomBtn>
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
  return { items: itemsListSelector(state) };
};

// withRouter allow us to get the history object from the props
export default withRouter(connect(mapState, mapDispatch)(CartDropdown));
