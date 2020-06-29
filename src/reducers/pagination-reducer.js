import { GET_POKEMONS, SET_CURRENT_PAGE } from "../actions/actionTypes";

const pages = (
  pagination = {
    pages: {},
    currentPage: 0,
    numPages: 0,
  },
  action
) => {
  if (action.type === GET_POKEMONS) {
    const page = action.payload.pokemons.map((pokemon) => pokemon.name);
    return {
      pages: { ...pagination.pages, [action.payload.currentPage]: page },
      currentPage: action.payload.currentPage,
      numPages: action.payload.numPages,
    };
  }

  if (action.type === SET_CURRENT_PAGE) {
    return {
      ...pagination,
      currentPage: action.payload.page,
    };
  }

  return pagination;
};

export default pages;
