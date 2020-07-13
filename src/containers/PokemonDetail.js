import React from "react";
import { css } from "emotion";
import { useSelector } from "react-redux";
import { Redirect, navigate } from "@reach/router";
import Loading from "../components/Loading";

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

const PokemonDetail = ({ id }) => {
  const pokemons = useSelector((state) => state.pokemons);
  if (!id || Object.keys(pokemons).length === 0) {
    return <Redirect noThrow to="/" />;
  }

  const pokemon = pokemons[id];

  return (
    <div>
      <div
        className={css`
          background: #1d2225;
          margin: 30px 40px 50px;
          border-radius: 30px;
          height: 50vh;
          overflow: hidden;
          box-shadow: inset 0 0 6px #2d2d2d;
        `}
      >
        <div
          className={css`
            display: flex;
            height: 100%;
            justify-content: center; /* align horizontal */
            align-items: center;
            img {
              max-width: 100%;
            }
          `}
        >
          <div
            className={css`
              flex: 1;
              padding: 20px;
            `}
          >
            <img src={pokemon.img} alt={pokemon.name} />
          </div>
          <div
            className={css`
              flex: 1;
              padding: 15px;
              margin: 12px;
              border-radius: 5px;
              background: #32383c;
              color: whitesmoke;
              font-weight: normal;
              line-height: 1.65;
              display: flex;
              align-self: stretch;
              font-size: 14px;
              span {
                color: #8bc34a;
              }
              .name {
                text-transform: capitalize;
              }
            `}
          >
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
          </div>
        </div>
      </div>
      <div className={buttons}>
        <button onClick={() => navigate("/")}>{"<"}</button>
        <span>Return</span>
      </div>
    </div>
  );
};

export default PokemonDetail;
