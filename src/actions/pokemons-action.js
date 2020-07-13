import { GET_POKEMONS, GET_POKEMON_DETAILS } from "./actionTypes";
import { setCurrentPage, isLoading } from "./pagination-action";

export const getPokemons = () => {
  return (dispatch, getState) => {
    const { pokemons, pagination } = getState();
    const size = Object.keys(pokemons).length;
    const nextPage = pagination.currentPage + 1;
    dispatch(isLoading());
    if (pagination.pages[nextPage]) {
      dispatch(setCurrentPage(nextPage));
    } else {
      fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${size}&limit=${pagination.limit}`
      )
        .then((response) => response.json())
        .then((response) => {
          const numPages = Math.ceil(response.count / pagination.limit);
          dispatch(addPokemons(response.results, nextPage, numPages));
        });
    }
  };
};

export const addPokemons = (pokemons, currentPage, numPages) => {
  return {
    type: GET_POKEMONS,
    payload: { pokemons, currentPage, numPages },
  };
};

export const getPokemonDetails = (id) => {
  return (dispatch) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((response) => {
        dispatch(addPokemonDetails(id, response));
      });
  };
};

export const addPokemonDetails = (id, details) => {
  return {
    type: GET_POKEMON_DETAILS,
    payload: { id, details },
  };
};
