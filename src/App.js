import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import { Global, css } from "@emotion/core";
import store from "./store";
import Pokedex from "./components/Pokedex";

const NotFound = () => (
  <div>
    <h2>Sorry, nothing here</h2>
  </div>
);

const App = () => {
  return (
    <React.StrictMode>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          body {
            padding: 0;
            margin: 0;
            background: #1d2225;
            font-family: "Press Start 2P", cursive;
          }
        `}
      />
      <Router>
        <Pokedex path="/" />
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
