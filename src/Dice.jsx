import React, { useState } from "react";

const Dice = ({ value }) => {
  const diceImages = [
    "https://www.clker.com/cliparts/X/w/P/Y/q/H/dice-1-md.png",
    "https://images.freeimages.com/clg/images/23/236983/dado-2_f?fmt=webp&w=500",
    "https://images.freeimages.com/clg/images/23/236984/dado-3_f?fmt=webp&w=500",
    "https://images.freeimages.com/clg/images/23/236985/dado-4_f?fmt=webp&w=500",
    "https://images.freeimages.com/clg/images/23/236988/dado-5_f?fmt=webp&w=500",
    "https://w7.pngwing.com/pngs/666/1008/png-transparent-android-simple-liar-s-dice-number-six-game-rectangle-dice.png",
  ];

  return (
    <div className="dice">
      <img width={300} height={300} src={diceImages[value]} alt="dice" />
    </div>
  );
};

export default Dice;
