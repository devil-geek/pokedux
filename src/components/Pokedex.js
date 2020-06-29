import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../actions/pokemons-action";
import Pokemons from "./Pokemons";
import { setCurrentPage } from "../actions/pagination-action";

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
    <div>
      <Pokemons pokemonList={pages[currentPage] || []} />
      <br />
      <span>currentPage: {currentPage}</span>
      <button onClick={nextPage}>Next</button>
      <button onClick={prevPage}>Prev</button>
    </div>
  );
};

export default Pokedex;
