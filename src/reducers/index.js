import { combineReducers } from "redux";
import pokemons from "./pokemons-reducer";
import pagination from "./pagination-reducer";

export const getPokemonList = (state) => {
  return state.pagination.pages[state.pagination.currentPage] || [];
};

export default combineReducers({ pokemons, pagination });
