import { useMemo, useState } from "react";

/**
 * ========
 * useMemo()
 * ========
 *
 * The word "memo" means memoization i.e. caching a value so as to avoid recomputing it.
 * It can be used where a function takes too long to execute but is called less often.
 * Also if we want to have referenital equality i.e. execute a function when a referential value changes
 *  useMemo can be used there as well. Eg: cache the "dark" style theme, so that the new style object gets created
 *  every time the component re-renders.
 */
function UseMemoHook() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  /* This function slows down the performace of the entire component
    Its value needs to be cached, to avoid calling this function and re-computing the value, we use the "useMemo" hook. 
    It also has a dependency array i.e. execute the function only when certain values change in our component. */
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  /* Function to simulate complex time taking calculation */
  function slowFunction(number) {
    console.log("Calling slow function");
    for (let i = 0; i < 1000000000; i++) {}
    return number * 2;
  }

  return (
    <div>
      <h2>UseMemo Hook</h2>
      <input
        type="number"
        value={number}
        onChange={(event) => setNumber(parseInt(event.target.value))}
      />
      <br />
      <button onClick={() => setDark((prev) => !prev)}>Change Theme</button>
      <div style={themeStyle}>{doubleNumber}</div>
    </div>
  );
}

export default UseMemoHook;
