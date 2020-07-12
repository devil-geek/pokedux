import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { css } from "emotion";
import { navigate } from "@reach/router";
import { getPokemonDetails } from "../actions/pokemons-action";
import { getPokemonList } from "../reducers";

const grid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  grid-auto-rows: 1fr;
  font-size: 0.7rem;
  padding: 15px 10px;

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
    padding: 10px;
    margin: 2px;
    border-radius: 5px;
    background: #32383c;
    text-align: center;
    cursor: pointer;
    font-family: "Press Start 2P", cursive;
    font-size: 0.65rem;
    border: none;
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

const Pokemons = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const pokemonList = useSelector(getPokemonList);
  const dispatch = useDispatch();

  const toDetails = (id) => {
    if (!pokemons[id].details) {
      dispatch(getPokemonDetails(id));
    }
    navigate(`/${pokemons[id].name}`);
  };

  return (
    <div>
      <div className={grid}>
        {pokemonList.map((pokemon) => {
          return (
            <button
              onClick={() => toDetails(pokemons[pokemon].name)}
              className="item"
              key={pokemon}
            >
              <img src={pokemons[pokemon].img} alt={pokemons[pokemon].name} />
              <p>{pokemons[pokemon].name}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Pokemons;
