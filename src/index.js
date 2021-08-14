import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store, persistor } from "./redux/store";

import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    {/* provider provides the store to the APP */}
    <Provider store={store}>
      <BrowserRouter>
        {/* PersistGate delay the render of the UI until persisted data is retrieved */}
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
