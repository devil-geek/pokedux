import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { css } from "emotion";
import { navigate } from "@reach/router";
import { getPokemonDetails } from "../actions/pokemons-action";
import { getPokemonList } from "../reducers";
import Loading from "./Loading";
import { isLoaded } from "../actions/pagination-action";

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

const hidden = css`
  display: none;
`;

const Pokemons = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const limit = useSelector((state) => state.pagination.limit);
  const loading = useSelector((state) => state.pagination.loading);
  const pokemonList = useSelector(getPokemonList);
  const dispatch = useDispatch();
  const [imgsLoaded, setImgsLoaded] = useState(0);

  const toDetails = (id) => {
    if (!pokemons[id].details) {
      dispatch(getPokemonDetails(id));
    }
    navigate(`/${pokemons[id].name}`);
  };

  useEffect(() => {
    if (imgsLoaded === limit) {
      dispatch(isLoaded());
      setImgsLoaded(0);
    }
  }, [dispatch, imgsLoaded, limit]);

  return (
    <div>
      <div className={loading ? "" : hidden}>
        <Loading />
      </div>
      <div className={loading ? hidden : grid}>
        {pokemonList.map((pokemon) => {
          return (
            <button
              onClick={() => toDetails(pokemons[pokemon].name)}
              className="item"
              key={pokemon}
            >
              <img
                src={pokemons[pokemon].img}
                alt={pokemons[pokemon].name}
                onLoad={() => setImgsLoaded(imgsLoaded + 1)}
                onError={() => {
                  pokemons[
                    pokemon
                  ].img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemons[pokemon].id}.png`;
                  return setImgsLoaded(imgsLoaded + 1);
                }}
              />
              <p>{pokemons[pokemon].name}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Pokemons;
