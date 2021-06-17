import "./App.css";
import { HomePage } from "./pages/homepage/homePage.component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShopPage from "./pages/Shop/shop.component";
import Header from "./components/header/header.component";
import SignInUpPage from "./pages/sign-in-and-up/SignInAndUp.component";
import React from "react";
import { createUserProfile, myAuth } from "./firebase/firebase.util";

class App extends React.Component {
  state = {
    currentUser: null,
  };

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
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        // if there is no user we should set current user to null in state
        this.setState({ currentUser: null });
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
          {/* feeding the user to the header component so it can render the stat of sign in efficiently */}
          <Header />
          <Switch>
            <Route path="/Shop">
              <ShopPage />
            </Route>

            <Route path="/signin">
              <SignInUpPage />
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

export default App;
