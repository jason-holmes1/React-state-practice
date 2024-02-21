import { useState } from "react";

const CoinToss = () => {
  
const [side, setSide] = useState(0);
  
  const getRand = () => {
    const randomSide = Math.floor(Math.random() * 2);
    return setSide(randomSide)
  };

  return (
    <div className="coin-toss">
   {side == 0 ?
      <img
        width={300}
        height={300}
        src="https://www.gambling911.com/files/styles/article_image/public/publisher/Super-Bowl-Coin-Toss-Heads-020316L.jpg?itok=L4jga2uu"
        alt="head"
      />
     :
      <img
        width={300}
        height={300}
        src="https://bjc.edc.org/June2017/bjc-r/img/5-algorithms/img_flipping-a-coin/Tails.png"
        alt="tail"
      />
}
      <button onClick = {getRand}>Flip</button>
    </div>
  );
};

export default CoinToss;
