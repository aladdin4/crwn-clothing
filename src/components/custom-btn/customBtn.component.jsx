import React from "react";

import "./customBtn.styles.scss";

const CustomBtn = ({ children, ...others }) => {
  return (
    <button className="custom-button" {...others}>
      {children}
    </button>
  );
};
export default CustomBtn;
