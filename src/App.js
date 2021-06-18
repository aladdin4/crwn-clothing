import "./App.css";
import { HomePage } from "./pages/homepage/homePage.component";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import ShopPage from "./pages/Shop/shop.component";
import Header from "./components/header/header.component";
import SignInUpPage from "./pages/sign-in-and-up/SignInAndUp.component";
import React from "react";
import { createUserProfile, myAuth } from "./firebase/firebase.util";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  componentDidMount() {
    // onAuthStateChange(arg) method returns a function that when called the open subscribtion is closed, and the arg. it takes should be the function that will be called as subscribed to change event.
    this.unSubscripe = myAuth.onAuthStateChanged(async (user) => {
      if (user) {
        // creating a new profile if it doesn't already exist in the DB for the user just logged in
        // this createUserProfile method is async inside, so to use it we have to use the keyword await
        const userRef = await createUserProfile(user);

        // to get a live feedback data from fireS, we need to subscribe to it
        userRef.onSnapshot((snapShot) => {
          // we need to save the user data in state, but from the DB not from google Auth object
          // this.setState({
          //   currentUser: {
          //     id: snapShot.id,
          //     ...snapShot.data(),
          //   },
          // });

          // we need to save the user data in redux because the state is getting to big and we need this tool to handle it
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        // if there is no user we should set current user to null in state
        // this.setState({ currentUser: null });

        this.props.setCurrentUser(user);
      }
    });
  }

  componentWillUnmount() {
    this.unSubscripe();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/Shop">
              <ShopPage />
            </Route>

            <Route path="/signin">
              {this.props.currentUser ? <Redirect to="/" /> : <SignInUpPage />}
            </Route>

            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapState = (state) => {
  return {
    currentUser: state.user.currentUser,
  };
};

const mapDispatch = (dispatch) => {
  return {
    setCurrentUser: (user) => {
      dispatch(setCurrentUser(user));
    },
  };
};

export default connect(mapState, mapDispatch)(App);
