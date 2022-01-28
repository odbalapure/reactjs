import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    default:
      return state;
  }
}

/**
 * ===========
 * useReducer
 * ===========
 *
 * Used in case of complex state manipulation and transition
 * It accepts a "reducer" function and an initial state
 * The reducer function accepts:
 * - reducer function
 * - initial state
 * useReducer returns 2 values:
 * - state object
 * - dispatch function
 *
 * The best thing is that there is no other way to modify the state
 *  other than the actions we provide in the "reducer()" function,
 *  hence the state only changes the way we expect it to.
 */
function UseRefucerHook() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    // You can provide the action directly or else
    //    write an object and provide the values accordingly.
    // This avoids mispelling the words and does nothing special.
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: "decrement" });
  }

  return (
    <div>
      <h2>UseReducer Hook</h2>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default UseRefucerHook;
