import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../actions/pokemons-action";
import { prevPage, setLimit } from "../../actions/pagination-action";
import { Button, Controls, Line, Lines, Select } from "./styles";

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
    <Controls>
      <Button disabled={currentPage === 1} onClick={prev}>
        {"<"}
      </Button>
      <span>
        Page:{currentPage} of {numPages}
      </span>
      <Button disabled={currentPage === numPages} onClick={next}>
        {">"}
      </Button>
      <Select name="limit" id="limit" onChange={changeLimit} value={limit}>
        <option value={20}>20</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </Select>
      Pokemons per page
      <Lines>
        <Line />
        <Line />
        <Line />
      </Lines>
    </Controls>
  );
};

export default Pagination;
