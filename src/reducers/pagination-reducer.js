import {
  GET_POKEMONS,
  SET_CURRENT_PAGE,
  LOADING,
  LOADED,
  SET_LIMIT,
} from "../actions/actionTypes";

const pages = (
  pagination = {
    pages: {},
    currentPage: 0,
    numPages: 0,
    limit: 20,
  },
  action
) => {
  if (action.type === GET_POKEMONS) {
    const page = action.payload.pokemons.map((pokemon) => pokemon.name);
    return {
      ...pagination,
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

  if (action.type === LOADING) {
    return {
      ...pagination,
      loading: true,
    };
  }

  if (action.type === LOADED) {
    return {
      ...pagination,
      loading: false,
    };
  }

  if (action.type === SET_LIMIT) {
    return {
      ...pagination,
      limit: action.payload.limit,
      pages: {},
      currentPage: 0,
      numPages: 0,
    };
  }
  return pagination;
};

export default pages;
