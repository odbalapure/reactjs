import UseEffectHook from "./predefined-hooks/UseEffecfHook";
import UseMemoHook from "./predefined-hooks/UseMemoHook";
import UseStateHook from "./predefined-hooks/UseStateHook";

function App() {
  return (
    <div>
      <h1>
        <mark>
          <u>Hooks</u>
        </mark>
      </h1>
      <UseStateHook />
      <hr />
      <UseMemoHook />
      <hr />
      <UseEffectHook />
    </div>
  );
}

export default App;
