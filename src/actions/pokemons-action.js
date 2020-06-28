export const getPokemons = () => {
  return (dispatch) => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((response) => {
        dispatch(addPokemons(response.results));
      });
  };
};

export const GET_POKEMONS = "GET_POKEMONS";

export const addPokemons = (pokemons) => {
  return {
    type: GET_POKEMONS,
    payload: { pokemons },
  };
};
