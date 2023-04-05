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
          *,
          *::after,
          *::before {
            margin: 0;
            padding: 0;
            box-sizing: inherit;
          }
          html {
            font-size: 62.5%;
            @media only screen and (max-width: 75em) {
              font-size: 56.25%;
            }
            @media only screen and (max-width: 56.25em) {
              font-size: 50%;
            }
          }
          body {
            padding: 0;
            margin: 0;
            background: #1d2225;
            background: radial-gradient(#455057, #000000);
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
