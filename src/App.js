import "./App.css";
import { HomePage } from "./pages/homepage/homePage.component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShopPage from "./pages/Shop/shop.component";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Route path="/Hats">
            <HatsPage />
          </Route> */}
          <Route path="/Shop">
            <ShopPage />
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
