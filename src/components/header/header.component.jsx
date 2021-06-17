import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";

import React from "react";
import "./header.styles.scss";
import { myAuth } from "../../firebase/firebase.util";
import { connect } from "react-redux";

const Header = (props) => {
  console.log("the props of the <Header/> are:", props);

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

// a fn() that receive the whole state object  and is supposed to return another object based on it, this object will go to the wrapper and passed down as props to our component
// called automatically through connect()(</>)
const mapStateToProps = (state) => {
  return { currentUser: state.user.currentUser };
};

export default connect(mapStateToProps)(Header);
