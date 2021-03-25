import "./App.css";
import { HomePage } from "./pages/homePage.component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HatsPage } from "./pages/hats.componnet";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Hats">
            <HatsPage />
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
