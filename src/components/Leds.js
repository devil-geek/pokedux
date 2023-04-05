import React from "react";
import { css, keyframes } from "emotion";

const bigLed = "7.5rem";
const miniLed = "3.75rem";
const borderRadius = "10rem";

const blinkRed = keyframes`
  from { background:radial-gradient(#ffb74d, #ff5722) }
    50% { background: radial-gradient(#ff5722,#d84315); box-shadow: rgba(0, 0, 0, 0.2) 0 -0.1rem 0.7rem 0.1rem, inset #d84315 0 -0.1rem 0.9rem, rgba(255, 87, 34, 0.5) 0 0.2rem 0;}
    to { background:radial-gradient(#ffb74d, #ff5722) }
`;

const blinkYellow = keyframes`
  from { background: radial-gradient(#fff176, #ffc107) }
    50% { background: radial-gradient(#ffc107, #ffa000); box-shadow: rgba(0, 0, 0, 0.2) 0 -0.1rem 0.7rem 0.1rem, inset #ffa000 0 -0.1rem 0.9rem, #ffd54f 0 0.2rem 0; }
    to { background: radial-gradient(#fff176, #ffc107) }
`;

const blinkGreen = keyframes`
  from { background: radial-gradient(#cddc39, #4caf50)}
    50% { background: radial-gradient(#4caf50, #2e7d32); box-shadow: rgba(0, 0, 0, 0.2) 0 -0.1rem 0.7rem 0.1rem, inset #2e7d32 0 -0.1rem 0.9rem, #4caf50 0 0.2rem 0; }
    to { background: radial-gradient(#cddc39, #4caf50) }
`;

const blinkBlue = keyframes`
  from { background:radial-gradient(#05fbfb, #03a9f4) }
    50% { background:radial-gradient(#03a9f4, #0277bd); box-shadow: rgba(0, 0, 0, 0.2) 0 -0.1rem 0.7rem 0.1rem, inset #0277bd 0 -0.1rem 0.9rem, #03a9f4 0 0.2rem 0; }
    to { background:radial-gradient(#05fbfb, #03a9f4) }
`;
const Leds = () => {
  return (
    <div>
      <div
        className={css`
          display: flex;
          padding: 2.8rem 3.2rem;
        `}
      >
        <span
          className={css`
            display: inline-block;
            background-color: #03a9f4;
            background: radial-gradient(#05fbfb, #03a9f4);
            border-radius: ${borderRadius};
            width: ${bigLed};
            height: ${bigLed};
            border: 0.8rem solid #ffffff;
            margin-right: 2rem;
            animation: ${blinkBlue} 2s ease infinite;
          `}
        />

        <span
          className={css`
            display: inline-block;
            background-color: #4caf50;
            background: radial-gradient(#cddc39, #4caf50);
            border-radius: ${borderRadius};
            width: ${miniLed};
            height: ${miniLed};
            border: 0.5rem solid #ffffff;
            margin-right: 2rem;
            animation: ${blinkGreen} 0.5s ease infinite;
          `}
        />
        <span
          className={css`
            display: inline-block;
            background-color: #ffc107;
            background: radial-gradient(#fff176, #ffc107);
            border-radius: ${borderRadius};
            width: ${miniLed};
            height: ${miniLed};
            border: 0.5rem solid #ffffff;
            margin-right: 2rem;
            animation: ${blinkYellow} 0.5s ease infinite;
            animation-delay: 0.1s;
          `}
        />
        <span
          className={css`
            display: inline-block;
            background-color: #ff5722;
            background: radial-gradient(#ffb74d, #ff5722);
            border-radius: ${borderRadius};
            width: ${miniLed};
            height: ${miniLed};
            border: 0.5rem solid #ffffff;
            margin-right: 2rem;
            animation: ${blinkRed} 0.5s ease infinite;
            animation-delay: 0.2s;
          `}
        />
      </div>
      <div
        className={css`
          background: #b71c1c;
          height: 10rem;
          margin-top: -8rem;
          clip-path: polygon(
            36rem 0,
            72rem 0,
            72rem 2rem,
            36rem 2rem,
            25rem 9rem,
            0 9rem,
            0 7rem,
            25rem 7rem
          );
        `}
      ></div>
    </div>
  );
};

export default Leds;
