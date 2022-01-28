import React, { useState } from "react";
import ClassContextComponent from "./ClassContext";
import FunctionContext from "./FunctionContext";

/* Creating react context */
export const ThemeContext = React.createContext();

/**
 * ===========
 * useContext
 * ===========
 *
 * It is used to pass down props to any of the children components w/o specify
 *  the prop values for each component. It acts as a global state for all the children of the Provider.
 *  This avoid prop drilling and chaining of components.
 *
 * useContext has 2 parts
 * 1) Create a Context Provider which wraps the code which will be needing the access to the
 *  information in the context using a prop called as "value".
 * 2) Consuming the context.
 */
function UseContextHook() {
  const [darkTheme, setDarkTheme] = useState(false);

  function toggleTheme() {
    setDarkTheme((prev) => !prev);
  }

  return (
    <div>
      <h2>UseContext Hook</h2>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ClassContextComponent />
        <FunctionContext />
      </ThemeContext.Provider>
    </div>
  );
}

export default UseContextHook;
