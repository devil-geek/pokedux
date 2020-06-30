import React from "react";
import { css } from "emotion";
import Pokemons from "./Pokemons";
import Leds from "./Leds";
import Pagination from "./Pagination";

const Pokedex = () => {
  return (
    <div
      className={css`
        background-color: #f44336;
        min-height: calc(100vh - 20px);
        max-width: 1000px;
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
          max-height: 65vh;
          overflow: auto;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 70px 100%, 0 90%);
        `}
      >
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
    </div>
  );
};

export default Pokedex;
