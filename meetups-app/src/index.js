import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { FavoritesContextProvider } from "./store/favorites-context";
/* wrapping with {} means, we don't want the default export "context object", 
  instead we want the export function */

ReactDOM.render(
  /* All the components will be able to interact with the context */
  <FavoritesContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </FavoritesContextProvider>,
  document.getElementById("root")
);
