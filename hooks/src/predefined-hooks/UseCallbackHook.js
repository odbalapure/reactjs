import { useCallback, useEffect, useState } from "react";

/**
 * ============
 * useCallBack
 * ============
 *  
 * Used when a function inside of a component is executed again and again w/o need
 * Wrapping a function inside useCallBack and passing dependencies to the dependency array,
 *  the funciton will be executed only if there is a change in the mentioned dependencies.
 * 
 * useCallBack returns a memoized version of the callback.
 */
function UseCallbackHook() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // Consider it as an API call that fetches list of numbers.
  // This function will only execute if "number" value changes.
  // Typically within a component are called after a re-render
  //    but "useCallBack()" avoids executing some functions if they are wrapped inside
  //    useCallBack and based on the value inside the dependency array. 
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  /* NOTE: useCallBack returns a function where as useMemo returns a cached value */

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <div>
      <h2>UseCallBack Hook</h2>
      <div style={theme}>
        <input
          type="number"
          value={number}
          onChange={(event) => {
            setNumber(parseInt(event.target.value));
          }}
        />
        <button
          onClick={() => {
            setDark((prev) => !prev);
          }}
        >
          Toggle Theme
        </button>
        <List getItems={getItems} />
      </div>
    </div>
  );
}

/* List component */
function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log("Items updated...");
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
}

export default UseCallbackHook;
