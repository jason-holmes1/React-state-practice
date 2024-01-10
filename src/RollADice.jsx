import React from "react";
import Dice from "./Dice";

function RollADice() {
  // 1. declare a state variable called side and initialize it to 0 - check if useState is imported

  // use this function to generate a random number between 0 and 5
  const getRand = () => {
    return Math.floor(Math.random() * 6);
  };

  // 2. add onClick function to button to call getRand and set side to the result

  // 3. pass side to the prop value of Dice component

  return (
    <div className="rolldice">
      <Dice value={0} />
      <button>Roll</button>
    </div>
  );
}

export default RollADice;
