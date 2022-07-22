import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { FirebaseContext } from "./context/firebase";
import { app } from "./lib/firebase.prod";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <DarkModeContextProvider>
    <FirebaseContext.Provider value={{ app }}>
      <App />
    </FirebaseContext.Provider>
  </DarkModeContextProvider>
  // </React.StrictMode>
);
