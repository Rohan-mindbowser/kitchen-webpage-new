import "./App.css";
import "./Style.css";
// import { useState } from "react";
import { Context } from "./Components/Contexthook/Context";
import { createContext } from "react";

export const AppContext = new createContext();

function App() {
  let name = "rohan kadam";
  return (
    <>
      <AppContext.Provider value={{ name }}>
        <Context />
      </AppContext.Provider>
    </>
  );
}

export default App;
