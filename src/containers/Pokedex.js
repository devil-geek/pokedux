import React from "react";
import { css } from "emotion";
import { Router } from "@reach/router";
import Leds from "../components/Leds";
import PokemonList from "./PokemonList";
import PokemonDetail from "./PokemonDetail";

const Pokedex = () => {
  return (
    <div
      className={css`
        background-color: #f44336;
        min-height: calc(100vh - 20px);
        max-width: 960px;
        margin: 10px auto;
        border-radius: 10px;
        box-shadow: #b71c1c 5px 5px 1px;
      `}
    >
      <Leds />
      <div
        className={css`
          background: #e0e0e0;
          margin: 50px;
          border-top-left-radius: 40px;
          border-top-right-radius: 40px;
          border-bottom-right-radius: 2px;
          padding-bottom: 30px;
          height: 65vh;
          overflow: hidden;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 70px 100%, 0 90%);
        `}
      >
        <Router>
          <PokemonList path="/" />
          <PokemonDetail path="/:id" />
        </Router>
      </div>
    </div>
  );
};

export default Pokedex;
