import React from "react";
import { useSelector } from "react-redux";

const Pokemons = ({ pokemonList }) => {
  const pokemons = useSelector((state) => state.pokemons);
  return (
    <div>
      <h1>Pokemons</h1>
      <div>
        {pokemonList.map((pokemon) => {
          return <div key={pokemon}>{pokemons[pokemon].name}</div>;
        })}
      </div>
    </div>
  );
};

export default Pokemons;
