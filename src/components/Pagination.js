import React, { useEffect } from "react";
import { css } from "emotion";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../actions/pokemons-action";
import { prevPage, setLimit } from "../actions/pagination-action";

const line = css`
  height: 5px;
  width: 100px;
  background: #2d2d2d;
  margin-bottom: 5px;
`;
const buttons = css`
  font-size: 12px;
  user-select: none;
  margin: 0 60px;

  button {
    border: none;
    font-size: 30px;
    outline: none;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background: #f44336;
    box-shadow: #b71c1c 2px 2px 1px;
    color: #b71c1c;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    line-height: 1.4;
    margin: 0 10px;
    &:active {
      box-shadow: none;
      position: relative;
      top: 2px;
    }
    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
`;
const Pagination = () => {
  const pages = useSelector((state) => state.pagination.pages);
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const limit = useSelector((state) => state.pagination.limit);
  const numPages = useSelector((state) => state.pagination.numPages);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(pages).length === 0) {
      dispatch(getPokemons());
    }
  }, [dispatch, pages]);

  const next = () => {
    dispatch(getPokemons());
  };

  const prev = () => {
    dispatch(prevPage());
  };

  const changeLimit = (e) => {
    dispatch(setLimit(e.target.value));
  };

  return (
    <div className={buttons}>
      <button disabled={currentPage === 1} onClick={prev}>
        {"<"}
      </button>
      <span>
        Page:{currentPage} of {numPages}
      </span>
      <button disabled={currentPage === numPages} onClick={next}>
        {">"}
      </button>
      <select
        className={css`
          border-radius: 3px;
          border: 3px solid #2d2d2d;
          background: transparent;
          font-family: "Press Start 2P", cursive;
          padding: 0.5rem 0 0.5rem 0.5rem;
          margin: 0 0.5rem;
        `}
        name="limit"
        id="limit"
        onChange={changeLimit}
        value={limit}
      >
        <option value={20}>20</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
      Pokemons per page
      <div
        className={css`
          float: right;
        `}
      >
        <div className={line} />
        <div className={line} />
        <div className={line} />
      </div>
    </div>
  );
};

export default Pagination;
