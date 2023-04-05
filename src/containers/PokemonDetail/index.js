import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect, navigate } from "@reach/router";
import Loading from "../../components/Loading";
import {
  Button,
  Controls,
  Line,
  Lines,
} from "../../components/Pagination/styles";
import { DetailContainer, ScreenDetail, DetailImg, DetailInfo } from "./styles";

function populateVoiceList() {
  return new Promise(function (resolve) {
    const synth = window.speechSynthesis;
    let id;

    id = setInterval(() => {
      if (synth.getVoices().length !== 0) {
        resolve(synth.getVoices());
        clearInterval(id);
      }
    }, 10);
  });
}

const pokedexVoice = async (pokemon) => {
  if (pokemon && pokemon.details) {
    if ("speechSynthesis" in window) {
      const voices = await populateVoiceList();
      const msg = new SpeechSynthesisUtterance();
      const voice = voices.find(
        (v) => v.name === "Google español de Estados Unidos"
      );
      if (voice) {
        msg.voice = voice;
        msg.volume = 1; // From 0 to 1
        msg.rate = 1; // From 0.1 to 10
        msg.pitch = 0.3; // From 0 to 2
        msg.text = `${pokemon.name}, type: ${pokemon.details.types
          .map((type) => type.type.name)
          .join(", ")}`;
        msg.lang = "en";
        speechSynthesis.speak(msg);
      }
    } else {
      // Speech Synthesis Not Supported 😣
      alert("Sorry, your browser doesn't support text to speech!");
    }
  }
};

const PokemonDetail = ({ id }) => {
  const pokemons = useSelector((state) => state.pokemons);
  const pokemon = pokemons[id];

  useEffect(() => {
    pokedexVoice(pokemon);
  }, [pokemon]);

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
        <span>Return to list</span>
        <Lines>
          <Line />
          <Line />
          <Line />
        </Lines>
      </Controls>
    </div>
  );
};

export default PokemonDetail;
