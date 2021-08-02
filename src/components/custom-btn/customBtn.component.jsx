import React from "react";

import "./customBtn.styles.scss";

const CustomBtn = (props) => {
  return (
    // adding 2 conditional classes based on the sent props to the button
    <button
      className={`custom-button 
      
      ${props.isSignWithGoogle ? "google-sign-in" : ""} 
      
      ${props.inverted ? "inverted" : ""}

      `}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default CustomBtn;
