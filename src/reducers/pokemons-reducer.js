import { GET_POKEMONS } from "../actions/actionTypes";

const pokemons = (pokemons = {}, action) => {
  if (action.type === GET_POKEMONS) {
    return {
      ...pokemons,
      ...action.payload.pokemons.reduce((pokemons, currentPokemon) => {
        const id = currentPokemon.url.split("/");
        pokemons[currentPokemon.name] = {
          ...currentPokemon,
          img: `https://pokeres.bastionbot.org/images/pokemon/${id[6]}.png`,
        };
        return pokemons;
      }, {}),
    };
  }
  return pokemons;
};

export default pokemons;
