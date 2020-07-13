import React from "react";
import { css, keyframes } from "emotion";

const bigLed = "100px";
const miniLed = "50px";
const borderRadius = "100px";

const blinkRed = keyframes`
  from { background:radial-gradient(#ffb74d, #ff5722) }
    50% { background: radial-gradient(#ff5722,#d84315); box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #d84315 0 -1px 9px, rgba(255, 87, 34, 0.5) 0 2px 0;}
    to { background:radial-gradient(#ffb74d, #ff5722) }
`;

const blinkYellow = keyframes`
  from { background: radial-gradient(#fff176, #ffc107) }
    50% { background: radial-gradient(#ffc107, #ffa000); box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #ffa000 0 -1px 9px, #ffd54f 0 2px 0; }
    to { background: radial-gradient(#fff176, #ffc107) }
`;

const blinkGreen = keyframes`
  from { background: radial-gradient(#cddc39, #4caf50)}
    50% { background: radial-gradient(#4caf50, #2e7d32); box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #2e7d32 0 -1px 9px, #4caf50 0 2px 0; }
    to { background: radial-gradient(#cddc39, #4caf50) }
`;

const blinkBlue = keyframes`
  from { background:radial-gradient(#05fbfb, #03a9f4) }
    50% { background:radial-gradient(#03a9f4, #0277bd); box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #0277bd 0 -1px 9px, #03a9f4 0 2px 0; }
    to { background:radial-gradient(#05fbfb, #03a9f4) }
`;
const Leds = () => {
  return (
    <div>
      <div
        className={css`
          display: flex;
          padding: 28px 32px;
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
            border: 8px solid #fff;
            margin-right: 20px;
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
            border: 5px solid #fff;
            margin-right: 20px;
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
            border: 5px solid #fff;
            margin-right: 20px;
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
            border: 5px solid #fff;
            margin-right: 20px;
            animation: ${blinkRed} 0.5s ease infinite;
            animation-delay: 0.2s;
          `}
        />
      </div>
      <div
        className={css`
          background: #b71c1c;
          height: 100px;
          margin-top: -80px;
          clip-path: polygon(
            40% 0,
            100% 0,
            100% 20%,
            40% 20%,
            28% 100%,
            0 100%,
            0 80%,
            28% 80%
          );
        `}
      ></div>
    </div>
  );
};

export default Leds;
