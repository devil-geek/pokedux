import { GET_POKEMONS } from "../actions/pokemons-action";

const pokemons = (state = [], action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return action.payload.pokemons;
    default:
      return state;
  }
};

export default pokemons;
