import { useEffect, useState } from "react";

/**
 * ========
 * useEffect()
 * ========
 *
 * There may be a case when you want to perform an action when a component mounts or even unmounts
 * OR when call a function when a particular resource changes.
 * We can use the "useEffect" hook in this scenario.
 * 
 * When we wish to perform an action when a component unmounts then we can do so in the "return"
 * part of the useEffect()
 */
function UseEffectHook() {
  const [resourceType, setResourceType] = useState("users");
  const [items, setItems] = useState([]);

  /* The inner function executes when "resourceType" changes OR
    when the component re-renders. The dependency array -> "[]" can be empty as well. */
  useEffect(() => {
    console.log("Resource type was changed...");
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data);
      });
  }, [resourceType]);

  /* Function to output value of current window size */
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => handleResize());
    /* NOTE: This removes the event listner when our component "unmounts" */
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <div>
      <h2>Use Effect Hook</h2>
      <h3>{windowWidth}</h3>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h3>{resourceType}</h3>
      <p>{JSON.stringify(items)}</p>
    </div>
  );
}

export default UseEffectHook;
