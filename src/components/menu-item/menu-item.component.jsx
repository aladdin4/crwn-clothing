import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

// this is the core of all of our homepage components, it's called via mapping through directory

// each one should be clickable and on click it should call a callback function that leads to the equivalent page through pushing the history object

// the component can access the history object directly via withReact()

const MenuItem = (props) => {
  return (
    <div
      className={`menu-item ${props.size}`}
      onClick={() => {
        props.history.push(
          `${props.history.location.pathname}${props.linkUrl}`
        );
      }}
    >
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

export default withRouter(MenuItem);
