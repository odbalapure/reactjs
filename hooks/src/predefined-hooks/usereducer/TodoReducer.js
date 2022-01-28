import { useReducer, useState } from "react";

const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

/* Reducer function */
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];

    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }

        return todo;
      });

    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => {
        return todo.id !== action.payload.id;
      });

    default:
      return todos;
  }
}

/* Create and return a todo object */
function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

function TodoReducer() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function createTodo(event) {
    event.preventDefault();
    // "payload" is a naming convention
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    // Hitting enter clears the input box
    setName("");
  }

  return (
    <div>
      <h2>Todo Reducer</h2>
      <form onSubmit={createTodo}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
}

/* Todo component */
function Todo({ todo, dispatch }) {
  return (
    <div>
      <div>
        <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
          {todo.name} | &nbsp;
        </span>
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
          }
        >
          Toggle
        </button>
        <button
          onClick={() => {
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } });
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoReducer;
