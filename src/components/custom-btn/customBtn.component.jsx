import React from "react";

import "./customBtn.styles.scss";

const CustomBtn = (props) => {
  return (
    <button className="custom-button" value={props.value}>
      {props.children}
    </button>
  );
};

export default CustomBtn;
