import { SET_CURRENT_PAGE } from "./actionTypes";

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: { page },
  };
};

export const prevPage = () => {
  return (dispatch, getState) => {
    const { pagination } = getState();
    const prevPage = pagination.currentPage - 1;
    if (pagination.pages[prevPage]) {
      dispatch(setCurrentPage(prevPage));
    }
  };
};
