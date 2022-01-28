import { useContext } from "react";
import { ThemeContext } from "./UseContextHook";

/**
 * Consuming a context is not same as class component
 */
function FunctionContext() {
  const darkTheme = useContext(ThemeContext);
  const themeStyle = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return <div style={themeStyle}>Function context</div>;
}

export default FunctionContext;
