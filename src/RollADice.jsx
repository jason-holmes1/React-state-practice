import React from "react";
import Dice from "./Dice";
import { useState } from "react";

function RollADice() {
  const [side,setSide] = useState(0)
  // 1. declare a state variable called side and initialize it to 0 - check if useState is imported

  // use this function to generate a random number between 0 and 5
  const getRand = () => {
    const rand =Math.floor(Math.random() * 6);
    setSide(rand)
  };
  // 2. add onClick function to button to call getRand and set side to the result

  // 3. pass side to the prop value of Dice component

  return (
    <div className="rolldice">
      <Dice value={side} />
      <button onClick={getRand}>Roll</button>
    </div>
  );
}

export default RollADice;
