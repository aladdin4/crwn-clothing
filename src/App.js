import "./App.css";
import { HomePage } from "./pages/homepage/homePage.component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShopPage from "./pages/Shop/shop.component";
import Header from "./components/header/header.component";
import SignInUpPage from "./pages/sign-in-and-up/SignInAndUp.component";

function App() {
  return (
    <Router>
      <div className="App">
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

export default App;
