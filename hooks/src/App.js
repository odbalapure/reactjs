import UseCallbackHook from "./predefined-hooks/UseCallbackHook";
import UseContextHook from "./predefined-hooks/usecontext/UseContextHook";
import UseEffectHook from "./predefined-hooks/UseEffecfHook";
import UseLayoutEffectHook from "./predefined-hooks/UseLayoutEffectHook";
import UseMemoHook from "./predefined-hooks/UseMemoHook";
import TodoReducer from "./predefined-hooks/usereducer/TodoReducer";
import UseReducerHook from "./predefined-hooks/usereducer/UseReducerHook";
import UseRefHook from "./predefined-hooks/UseRefHook";
import UseStateHook from "./predefined-hooks/UseStateHook";

function App() {
  return (
    <div>
      <h1>
        <mark>
          <u>Hooks</u>
        </mark>
      </h1>
      <TodoReducer />
      <hr />
      <UseStateHook />
      <hr />
      <UseReducerHook />
      <hr />
      <UseCallbackHook />
      <hr />
      <UseRefHook />
      <hr />
      <UseLayoutEffectHook />
      <hr />
      <UseMemoHook />
      <hr />
      <UseContextHook />
      <hr />
      <UseEffectHook />
    </div>
  );
}

export default App;
