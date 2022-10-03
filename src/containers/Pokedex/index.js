import React from "react";
import { Router } from "@reach/router";
import Leds from "../../components/Leds";
import PokemonList from "../PokemonList";
import PokemonDetail from "../PokemonDetail";
import { PokedexBody, PokedexScreen } from "./styles";

const Pokedex = () => {
  return (
    <PokedexBody>
      <Leds />
      <PokedexScreen>
        <Router>
          <PokemonList path="/" />
          <PokemonDetail path="/:id" />
        </Router>
      </PokedexScreen>
    </PokedexBody>
  );
};

export default Pokedex;
