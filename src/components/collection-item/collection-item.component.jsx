import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import CustomBtn from "../custom-btn/customBtn.component";
import "./collection-item.styles.scss";

// custom component for rendering items
const CollectionItem = (props) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${props.item.imageUrl})` }}
      />
      <div className="collection-footer">
        <span className="name">{props.item.name}</span>
        <span className="price">${props.item.price}</span>
      </div>
      <CustomBtn
        inverted
        onClick={() => {
          props.addItem(props.item);
        }}
      >
        Add to cart
      </CustomBtn>
    </div>
  );
};

const mapDispatch = (dispatch) => {
  return {
    addItem: (item) => {
      dispatch(addItem(item));
    },
  };
};

export default connect(null, mapDispatch)(CollectionItem);
