import React from "react";
import { css } from "emotion";
import Pokemons from "../components/Pokemons";
import Pagination from "../components/Pagination";

const PokemonList = () => {
  return (
    <div>
      <div
        className={css`
          background: #1d2225;
          margin: 30px 40px 50px;
          border-radius: 30px;
          max-height: 50vh;
          overflow: auto;
          box-shadow: inset 0 0 6px #2d2d2d;
        `}
      >
        <Pokemons />
      </div>
      <Pagination />
    </div>
  );
};

export default PokemonList;
