import { SET_CURRENT_PAGE, LOADING, LOADED, SET_LIMIT } from "./actionTypes";

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: { page },
  };
};

export const prevPage = () => {
  return (dispatch, getState) => {
    dispatch(isLoading());
    const { pagination } = getState();
    const prevPage = pagination.currentPage - 1;
    if (pagination.pages[prevPage]) {
      dispatch(setCurrentPage(prevPage));
    }
  };
};

export const isLoading = () => {
  return {
    type: LOADING,
  };
};

export const isLoaded = () => {
  return {
    type: LOADED,
  };
};

export const setLimit = (limit) => {
  return {
    type: SET_LIMIT,
    payload: { limit: Number(limit) },
  };
};
