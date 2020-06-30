import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { css } from "emotion";
import { getPokemons } from "../actions/pokemons-action";
import Pokemons from "./Pokemons";
import { setCurrentPage } from "../actions/pagination-action";
import Leds from "./Leds";

const Pokedex = () => {
  const pages = useSelector((state) => state.pagination.pages);
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
    dispatch({ type: "EVENTO" });
  }, [dispatch]);

  const nextPage = () => {
    const nextPage = currentPage + 1;
    if (pages[nextPage]) {
      dispatch(setCurrentPage(nextPage));
    } else {
      dispatch(getPokemons());
    }
  };

  const prevPage = () => {
    const prevPage = currentPage - 1;
    if (pages[prevPage]) {
      dispatch(setCurrentPage(prevPage));
    } else {
      return;
    }
  };

  return (
    <div
      className={css`
        background-color: #f44336;
        font-size: 24px;
        min-height: calc(100vh - 20px);
        max-width: 1000px;
        margin: 10px auto;
        border-radius: 10px;
        box-shadow: #b71c1c 5px 5px 1px;
      `}
    >
      <Leds />
      <div
        className={css`
          background: #e0e0e0;
          margin: 50px;
          border-top-left-radius: 40px;
          border-top-right-radius: 40px;
          border-bottom-right-radius: 2px;
          padding-bottom: 30px;
          max-height: 65vh;
          overflow: auto;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 70px 100%, 0 90%);
        `}
      >
        <div
          className={css`
            background: #1d2225;
            margin: 30px 40px 50px;
            border-radius: 30px;
            max-height: 50vh;
            overflow: auto;
            box-shadow: inset 0 0 6px #2d2d2d;
          `}
        >
          <Pokemons pokemonList={pages[currentPage] || []} />
        </div>
        <div
          className={css`
            float: right;
            margin: 0 60px;
          `}
        >
          <div
            className={css`
              height: 5px;
              width: 100px;
              background: #2d2d2d;
              margin-bottom: 5px;
            `}
          />
          <div
            className={css`
              height: 5px;
              width: 100px;
              background: #2d2d2d;
              margin-bottom: 5px;
            `}
          />
          <div
            className={css`
              height: 5px;
              width: 100px;
              background: #2d2d2d;
              margin-bottom: 5px;
            `}
          />
          <span>currentPage: {currentPage}</span>
          <button onClick={nextPage}>Next</button>
          <button onClick={prevPage}>Prev</button>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
