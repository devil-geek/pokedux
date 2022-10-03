import React from "react";
import { useSelector } from "react-redux";
import { Redirect, navigate } from "@reach/router";
import Loading from "../../components/Loading";
import { Button, Controls } from "../../components/Pagination/styles";
import { DetailContainer, ScreenDetail, DetailImg, DetailInfo } from "./styles";

const PokemonDetail = ({ id }) => {
  const pokemons = useSelector((state) => state.pokemons);
  const pokemon = pokemons[id];

  if (!pokemon) {
    return <Redirect noThrow to="/" />;
  }

  return (
    <div>
      <ScreenDetail>
        <DetailContainer>
          <DetailImg>
            <img src={pokemon.img} alt={pokemon.name} />
          </DetailImg>
          <DetailInfo>
            {pokemon.details && (
              <div>
                <p className="name">
                  <span>Name: </span>
                  {pokemon.name}
                </p>
                <p>
                  <span>Height: </span>
                  {pokemon.details.height}
                </p>
                <p>
                  <span>Weight:</span> {pokemon.details.weight}
                </p>
                <p>
                  <span>Type: </span>
                  {pokemon.details.types
                    .map((type) => type.type.name)
                    .join(", ")}
                </p>
                <p>
                  <span>Abilities: </span>
                  {pokemon.details.abilities
                    .map((ability) => ability.ability.name)
                    .join(", ")}
                </p>
                {pokemon.details.stats.map((stat) => {
                  return (
                    <p key={stat.stat.name}>
                      <span>{stat.stat.name}: </span>
                      {stat["base_stat"]}{" "}
                    </p>
                  );
                })}
              </div>
            )}
            {!pokemon.details && <Loading text={`Catching ${pokemon.name}`} />}
          </DetailInfo>
        </DetailContainer>
      </ScreenDetail>
      <Controls>
        <Button onClick={() => navigate("/")}>{"<"}</Button>
        <span>Return</span>
      </Controls>
    </div>
  );
};

export default PokemonDetail;
