import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";

import React from "react";
import "./header.styles.scss";
import { myAuth } from "../../firebase/firebase.util";

const Header = (props) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/">
          CONTACT
        </Link>
        {props.currentUser ? (
          <div
            className="option"
            onClick={() => {
              myAuth.signOut();
            }}
          >
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;