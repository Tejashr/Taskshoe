import "./App.css";
import React, { createContext, useEffect, useState } from "react";
import { contextData } from "./statesInitializer";
import axios from "axios";
import { allData } from "./utils";
import { Route, Routes } from "react-router";
import Home from "./Components/Home";
import Nav from "./Nav";
import Detail from "./Components/Detail";
export const Context = createContext();

function App() {
  const [context, setContext] = useState({ ...contextData });

  useEffect(() => {
    axios
      .get(allData)
      .then((res) => {
        context.data = res.data.details;
        setContext({ ...context });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Context.Provider value={[context, setContext]}>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/product-details/:id" element={<Detail />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
