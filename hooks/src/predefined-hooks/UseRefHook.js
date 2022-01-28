import { useEffect, useRef, useState } from "react";

/**
 * ========
 * useRef
 * ========
 *
 * It is very similar to "useState" but differs in 2 ways:
 * 1) Ref persists b/w renders of your component
 * 2) Ref does not cause a component to re-render
 *
 * useRef returns an object and that object has a property called
 * as "current" that will persist a value.
 * 
 * Another use case is to reference HTML elements as ref={<reference-name>}
 */
function UseRefHook() {
  /* Suppose you want to find how many times a component was rendered.
    First solution that would come to mind would be to have "useEffect",
    But this will create an infinte cycle as useState will cause the component
    to re-render and useEffect will be triggered due to the change in the "name". 
    
    Better solution is using "useRef", beacause see point [1] and [2].
    */
  const [name, setName] = useState("");
  // Returns an object
  // Eg: { current: 0 }
  const renderCount = useRef(1);
  /* Create a function which is called after a button clicked and the input
    box is focused. */
  const inputRef = useRef();
  /* Strong previous value of our state */
  const prevName = useRef();

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    prevName.current = name;
  });

  return (
    <div>
      <h2>UseRef Hook</h2>
      <input
        type="text"
        value={name}
        ref={inputRef}
        onChange={(event) => setName(event.target.value)}
      />
      <p>My name is {name}</p>
      <p>Component was rendered {renderCount.current} times. previous name was {prevName.current}</p>
      <button onClick={() => {inputRef.current.focus()}}>Foucs</button>
    </div>
  );
}

export default UseRefHook;
