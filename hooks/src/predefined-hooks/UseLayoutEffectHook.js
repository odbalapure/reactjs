import { useLayoutEffect, useState } from "react";

function UseLayoutEffectHook() {
  const [count, setCount] = useState(0);

  /**
   * ========
   * useLayoutEffect
   * ========
   * 
   * useEffect is similar but it executes asynchronously and after the DOM is painted
   *  whereas as useLayoutEffect executes synchronously
   *
   * useLayoutEffect executes b/w when React caculates your DOM and
   * paints it on the screen and it will block the DOM
   *
   * This hook should be used incase we are dealing with layouts
   * Eg: measure DOM elements, move DOM elements that should be visible to a user etc.
   */
  useLayoutEffect(() => {
    console.log("Count has changed...", count);
  }, [count]);

  return (
    <div>
      <h2>UseLayoutEffect Hook</h2>
      <p>
        <i>Similar to useEffect() but executes synchronously</i>
      </p>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
      <p>{count}</p>
    </div>
  );
}

export default UseLayoutEffectHook;
