import React from "react";
import Pokemons from "../../components/Pokemons";
import Pagination from "../../components/Pagination";
import { ScreenList } from "./styles";

const PokemonList = () => {
  return (
    <>
      <ScreenList>
        <Pokemons />
      </ScreenList>
      <Pagination />
    </>
  );
};

export default PokemonList;
