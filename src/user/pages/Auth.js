import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router";
import "./Auth.css";
import { Link } from "react-router-dom";

let myStorage = window.localStorage;

function Auth(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState([]);

  function setLocalStorage() {
    let userCopy = [...user];
    userCopy.map((u) => myStorage.setItem(u.email, u.userId));
  }
  function clearLocalStorage() {
    myStorage.clear();
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
  }
  function handleIsSignedIn() {
    setIsSignedIn();
  }

  function handleButton(e) {
    e.preventDefault();
  }

  function createUser(event) {
    event.preventDefault();
    setUser([...user, { userId: uuidv4(), email: email, password: password }]);
    setLocalStorage();
  }
  const USER_ID1 = "06f6c4c4-d332-4e1a-9336-5c2388859262";
  const USER_ID2 = "83a529a3-4bbc-4702-b01c-33077f7359b9";
  console.log(myStorage);
  return (
    <div className="authContainer">
      <form className="auth" onSubmit={createUser}>
        <h1>Sign Up</h1>
        <div>
          {" "}
          email
          <input type="email" value={email} onInput={handleEmail} />
        </div>
        <div style={{ marginBottom: "5px" }}>
          {" "}
          password
          <input type="password" value={password} onInput={handlePassword} />
        </div>
        <button onClick={handleButton} style={{ cursor: "pointer" }}>
          <Link to={`/`}>to-do-up</Link>
        </button>
      </form>
    </div>
  );
}

export default Auth;
