import { useState } from "react";

function SetState() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      {count}
      <br />
      <br />
      <button onClick={incrementCount}>Increment</button>
      <br />
      <br />
      <button onClick={decrementCount}>Decrement</button>
      <br />
      <br />
      <button onClick={reset}>Reset</button>
    </div>
  );
}
export default SetState;
