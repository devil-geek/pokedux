import {
  GET_POKEMONS,
  GET_POKEMON_DETAILS,
  SET_LIMIT,
} from "../actions/actionTypes";

const pokemons = (pokemons = {}, action) => {
  if (action.type === GET_POKEMONS) {
    return {
      ...pokemons,
      ...action.payload.pokemons.reduce((pokemons, currentPokemon) => {
        const id = currentPokemon.url.split("/");
        pokemons[currentPokemon.name] = {
          ...currentPokemon,
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id[6]}.png`,
          id: id[6],
        };
        return pokemons;
      }, {}),
    };
  }
  if (action.type === GET_POKEMON_DETAILS) {
    const { id, details } = action.payload;
    return {
      ...pokemons,
      [id]: { ...pokemons[id], details },
    };
  }

  if (action.type === SET_LIMIT) {
    return {};
  }
  return pokemons;
};

export default pokemons;
