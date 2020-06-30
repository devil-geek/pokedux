import React from "react";
import { css, keyframes } from "emotion";

const bigLed = "100px";
const miniLed = "50px";
const borderRadius = "100px";

const blinkRed = keyframes`
  from { background-color: #ff7043; }
    50% { background-color: #d84315; box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(255, 87, 34, 0.5) 0 2px 0;}
    to { background-color: #ff7043; }
`;

const blinkYellow = keyframes`
  from { background-color: #ffd54f; }
    50% { background-color: #ffa000; box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #ffd54f 0 2px 0; }
    to { background-color: #ffd54f; }
`;

const blinkGreen = keyframes`
  from { background-color: #4caf50; }
    50% { background-color: #2e7d32; box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #2e7d32 0 -1px 9px, #4caf50 0 2px 0; }
    to { background-color: #4caf50; }
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
            border-radius: ${borderRadius};
            width: ${bigLed};
            height: ${bigLed};
            border: 8px solid #fff;
            margin-right: 20px;
          `}
        />

        <span
          className={css`
            display: inline-block;
            background-color: #4caf50;
            border-radius: ${borderRadius};
            width: ${miniLed};
            height: ${miniLed};
            border: 5px solid #fff;
            margin-right: 20px;
            animation: ${blinkGreen} 0.3s ease infinite;
          `}
        />
        <span
          className={css`
            display: inline-block;
            background-color: #ffc107;
            border-radius: ${borderRadius};
            width: ${miniLed};
            height: ${miniLed};
            border: 5px solid #fff;
            margin-right: 20px;
            animation: ${blinkYellow} 1s ease infinite;
          `}
        />
        <span
          className={css`
            display: inline-block;
            background-color: #ff5722;
            border-radius: ${borderRadius};
            width: ${miniLed};
            height: ${miniLed};
            border: 5px solid #fff;
            margin-right: 20px;
            animation: ${blinkRed} 2s ease infinite;
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
