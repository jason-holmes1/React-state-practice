import { useState } from "react";

const CoinToss = () => {
  // declare a state variable called side and initialize it to 0

  // use this function to generate a random number between 0 and 1
  const getRand = () => {
    return Math.floor(Math.random() * 2);
  };

  // add onClick function to button to call getRand and set side to the result

  return (
    <div className="coin-toss">
      {/*conditionally render either one depending on the value of side. 0 = head, 1 = tails */}
      <img
        width={300}
        height={300}
        src="https://www.gambling911.com/files/styles/article_image/public/publisher/Super-Bowl-Coin-Toss-Heads-020316L.jpg?itok=L4jga2uu"
        alt="head"
      />

      {/* <img
        width={300}
        height={300}
        src="https://bjc.edc.org/June2017/bjc-r/img/5-algorithms/img_flipping-a-coin/Tails.png"
        alt="tail"
      /> */}

      <button>Flip</button>
    </div>
  );
};

export default CoinToss;
