import { GET_POKEMONS } from "./actionTypes";

export const getPokemons = () => {
  return (dispatch, getState) => {
    const { pokemons, pagination } = getState();
    const size = Object.keys(pokemons).length;
    const nextPage = pagination.currentPage + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${size}&limit=20`)
      .then((response) => response.json())
      .then((response) => {
        const numPages = Math.ceil(response.count / 20);
        dispatch(addPokemons(response.results, nextPage, numPages));
      });
  };
};

export const addPokemons = (pokemons, currentPage, numPages) => {
  return {
    type: GET_POKEMONS,
    payload: { pokemons, currentPage, numPages },
  };
};
