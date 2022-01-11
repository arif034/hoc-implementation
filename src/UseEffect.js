import { useState, useEffect } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `count now is + ${count}`;
  }, [count]);
  return (
    <div>
      {count}
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <br />
      <br />
      <button onClick={() => setCount(count - 1)}>Decrement Count</button>
      <br />
      <br />
      <button onClick={() => setCount(0)}>Reset Count</button>
    </div>
  );
}

export default UseEffect;
