import React from "react";
import { useSelector } from "react-redux";
import { css } from "emotion";

const grid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  grid-auto-rows: 1fr;
  font-family: "Press Start 2P", cursive;
  font-size: 0.7rem;
  padding: 10px;
  &::before {
    content: "";
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }

  & > *:first-child {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }

  .item {
    padding: 16px;
    margin: 2px;
    border-radius: 3px;
    background: #32383c;
    text-align: center;
    cursor: pointer;
    img {
      width: 100%;
      margin: 0 auto;
    }
    p {
      color: #fff;
      margin: 18px 0 0;
    }
  }
`;

const Pokemons = ({ pokemonList }) => {
  const pokemons = useSelector((state) => state.pokemons);
  return (
    <div>
      <div className={grid}>
        {pokemonList.map((pokemon) => {
          return (
            <div className="item" key={pokemon}>
              <img src={pokemons[pokemon].img} alt={pokemons[pokemon].name} />
              <p>{pokemons[pokemon].name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pokemons;
