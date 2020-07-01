import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Global, css } from "@emotion/core";
import store from "./store";
import Pokedex from "./containers/Pokedex";

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
            font-family: "Press Start 2P", cursive !important;
          }
        `}
      />
      <Pokedex />
    </React.StrictMode>
  );
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
