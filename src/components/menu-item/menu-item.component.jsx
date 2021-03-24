import React from "react";

import "./menu-item.styles.scss";

export const MenuItem = (props) => {
  return (
    <div className={`menu-item ${props.size}`}>
      <div
        className="background-image"
        style={{ backgroundImage: ` url(${props.url})` }}
      />
      <div className="content">
        <h2 className="title">{props.title.toUpperCase()}</h2>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
