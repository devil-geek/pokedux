import React from "react";
import { css, keyframes } from "emotion";

const shake = keyframes`
    0 {
      transform: translate(0, 0) rotate(0);
    }
    20% {
      transform: translate(-1rem, 0) rotate(-20deg);
    }
    30% {
      transform: translate(1rem, 0) rotate(20deg);
    }
    50% {
      transform: translate(-1rem, 0) rotate(-10deg);
    }
    60% {
      transform: translate(1rem, 0) rotate(10deg);
    }
    100% {
      transform: translate(0, 0) rotate(0);
    }
`;

const pokeball = css`
  position: relative;
  width: 10rem;
  height: 10rem;
  background: linear-gradient(
    to bottom,
    red 45%,
    #2d2d2d 45%,
    #2d2d2d 55%,
    white 55%,
    white 100%
  );
  border: 0.5rem solid #2d2d2d;
  border-radius: 100%;
  box-shadow: 0 0 0.3rem black;
  margin: 2rem auto;
  animation: ${shake} 1.25s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;

  .pokeball__button {
    position: absolute;
    top: calc(50% - 1.5rem);
    left: calc(50% - 1.5rem);
    width: 3rem;
    height: 3rem;
    background: whitesmoke;
    border: 0.6rem solid #000;
    border-radius: 50%;
    z-index: 10;
  }
`;

const Loading = (props) => {
  return (
    <div
      className={css`
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        height: 50vh;
        color: #8bc34a;
        flex-direction: column;
        font-size: 1.4rem;
      `}
    >
      <div className={pokeball}>
        <div className="pokeball__button"></div>
      </div>
      <p>{props.text || "Catching pokemons..."}</p>
    </div>
  );
};

export default Loading;
