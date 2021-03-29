import "./App.css";
import { HomePage } from "./pages/homepage/homePage.component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShopPage from "./pages/Shop/shop.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
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
