import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import store from "./store";
import Pokemons from "./components/Pokemons";

const NotFound = () => (
  <div>
    <h2>Sorry, nothing here</h2>
  </div>
);

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Pokemons path="/" />
        <NotFound default />
      </Router>
    </React.StrictMode>
  );
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
