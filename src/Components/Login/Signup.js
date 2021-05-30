import React, { useState, useContext } from "react";
import "./Signup.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import { auth } from "./firebase";
import { UserContext } from "../../App";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  console.log(loggedInUser);

  const signUp = (e) => {
    e.preventDefault();

    if (!fName) {
      return alert("Please enter a first name!");
    }
    if (!lName) {
      return alert("Please enter a last name!");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        const signedInUser = {
          name: userAuth.user.displayName,
          email: userAuth.user.email,
        };
        setLoggedInUser(signedInUser);

        history.replace(from);
        console.log(userAuth);
        userAuth.user
          .updateProfile({
            displayName: fName,
          })
          .then(() => {});
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signup">
      <div className="signup__info">
        <h1>Create Account</h1>
        <form className="signup__form">
          <label htmlFor="fName">First Name</label>
          <input
            id="fName"
            type="text"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          />
          <label htmlFor="lName">Last Name</label>
          <input
            id="lName"
            type="text"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          />
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signUp}>
            Create Account
          </button>
        </form>
        <div className="signup__divider">
          <hr /> <span>OR</span> <hr />
        </div>
        <Link to="/login">
          <button>Sign In</button>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
