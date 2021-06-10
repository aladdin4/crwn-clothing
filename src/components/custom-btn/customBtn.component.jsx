import React from "react";

import "./customBtn.styles.scss";

const CustomBtn = (props) => {
  return (
    <button
      className={`custom-button ${
        props.isSignWithGoogle ? "google-sign-in" : ""
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default CustomBtn;
