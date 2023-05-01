import { useState } from "react";
export const Counter = () => {
  const [value, setValue] = useState(0);
  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);

  return (
    <div>
      <h1>Counter {value}</h1>
      <button type="button" onClick={increment}>
        Increment by 1
      </button>
      <button type="button" onClick={decrement}>
        Decrement by 1
      </button>
    </div>
  );
};
