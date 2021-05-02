import React from "react";

import "./formInput.styles.scss";

const FormInput = (props) => {
  return (
    <div className="group">
      <input
        className="form-input"
        type={props.type}
        name={props.name}
        id={props.id}
        onChange={props.onChange}
        value={props.value}
        required={props.required}
      />
      {props.label ? (
        <label
          className={`${props.value.length ? `shrink` : ``} form-input-label`}
        >
          {props.label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
