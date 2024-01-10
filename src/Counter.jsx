import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // update the count state variable when the button is clicked using setCount
  // replace the text inside the h1 tag with the value of count

  const increment = () => {
    //   add code here
  };

  const decrement = () => {
    //   add code here
  };

  return (
    <div className="counter">
      <h1>Counter: "Replace this"</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
