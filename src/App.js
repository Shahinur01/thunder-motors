
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Components/Home/Home";
import styled from "styled-components";
import Header from "./Components/Header/Header";
import Login from './Components/Login/Login'
import { createContext, useState } from "react";
import CarDetails from "./Components/CarDetails/CarDetails";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="App">
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Header />
      <Header></Header>
        <Switch>
        
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/car">
            <CarDetails/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          
          
          
          
        </Switch>
      </Router>
      
    </UserContext.Provider>
    </div>)
}

export default App;
