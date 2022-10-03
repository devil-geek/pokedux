import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { navigate } from "@reach/router";
import { getPokemonDetails } from "../../actions/pokemons-action";
import { getPokemonList } from "../../reducers";
import Loading from "../Loading";
import { isLoaded } from "../../actions/pagination-action";
import { Grid, Item } from "./styles";

const Pokemons = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const limit = useSelector((state) => state.pagination.limit);
  const loading = useSelector((state) => state.pagination.loading);
  const pokemonList = useSelector(getPokemonList);
  const dispatch = useDispatch();
  const [imgsLoaded, setImgsLoaded] = useState(0);

  const toDetails = (id) => {
    if (!pokemons[id].details) {
      dispatch(getPokemonDetails(id));
    }
    navigate(`/${pokemons[id].name}`);
  };

  useEffect(() => {
    if (loading && imgsLoaded === limit) {
      dispatch(isLoaded());
      setImgsLoaded(0);
    }
  }, [dispatch, imgsLoaded, limit, loading]);

  return (
    <div>
      {loading && <Loading />}

      <Grid loading={`${loading}`}>
        {pokemonList.map((pokemon) => {
          return (
            <Item
              onClick={() => toDetails(pokemons[pokemon].name)}
              key={pokemon}
            >
              <img
                src={pokemons[pokemon].img}
                alt={pokemons[pokemon].name}
                onLoad={() => setImgsLoaded(imgsLoaded + 1)}
                onError={() => setImgsLoaded(imgsLoaded + 1)}
              />
              <p>{pokemons[pokemon].name}</p>
            </Item>
          );
        })}
      </Grid>
    </div>
  );
};

export default Pokemons;
