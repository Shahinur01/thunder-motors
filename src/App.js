import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import styled from "styled-components";
import Header from "./Components/Header/Header";
import { createContext, useState } from "react";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="App">
        <Header />
        <Home />
      </div>
    </UserContext.Provider>
  );
}

export default App;
