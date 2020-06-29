import { GET_POKEMONS } from "../actions/actionTypes";

const pokemons = (pokemons = {}, action) => {
  if (action.type === GET_POKEMONS) {
    return {
      ...pokemons,
      ...action.payload.pokemons.reduce((pokemons, currentPokemon) => {
        pokemons[currentPokemon.name] = currentPokemon;
        return pokemons;
      }, {}),
    };
  }
  return pokemons;
};

export default pokemons;
