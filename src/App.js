import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import styled from "styled-components";
import Header from "./Components/Header/Header";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/Signup";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div className="App">
          <Header />
          

          <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path='/signup'>
            <Signup />
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
