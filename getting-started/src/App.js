import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      {/* "text" can be accessed using props e.g. props.text */}
      <Todo text="Eat"/>
      <Todo text="Sleep"/>
      <Todo text="Code"/>
    </div>
  ); 
}

export default App;
