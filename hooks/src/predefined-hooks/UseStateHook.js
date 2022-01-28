import React, { useState } from "react";

/**
 * useState()
 * 
 * Rerenders the component when a value changes
 * We can pass different types of values to useState()
 * - Function
 * - Objects
 * - Primitives
 */
function UseStateHook() {
  /* useState() executes everytime on a rerender, so to optimize this we can pass a function to it */
  /* Passing primtive values */
  // const [count, setCount] = useState(0);

  /* Passing function */
  // const [count, setCount] = useState(() => {
  //   console.log("Component re-render...");
  //   return 10;
  // });

  /* Passing objects */
  const [state, setState] = useState({ count: 10, theme: "blue" });
  const count = state.count;
  const theme = state.theme;

  /* NOTE: Calling a function immediately will still cause re-rendering
    so write an anonymous function or pass a function but don't invoke it while passing
  */

  function decrement() {
    /* This is incorrect when it comes to make changes to a previous value */
    // setCount(count - 1);
    setState((prev) => {
      // We have to merge the changing value with the existing
      // To do so use a "spread" operator
      return { ...prev, count: prev.count - 1 };
    });
  }

  function increment() {
    setState((prev) => {
      return { ...prev, count: prev.count + 1 };
    });
  }

  return (
    <div>
      <h2>UseState Hook</h2>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default UseStateHook;
